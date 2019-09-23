import AWS from 'aws-sdk';
import { Expression } from '@typemon/dynamodb-expression';

interface Option {
    Limit?: number;
    ScanIndexForward?: boolean;
    ExclusiveStartKey?: { [key: string]: any };
}
let dynamodb: AWS.DynamoDB;
let client: AWS.DynamoDB.DocumentClient;

export const refresh = () => {
    const accessKeyId = localStorage.getItem('accesskey') || '';
    const secretAccessKey = localStorage.getItem('secretkey') || '';
    dynamodb = new AWS.DynamoDB({
        region: 'ap-northeast-2',
        accessKeyId,
        secretAccessKey,
    });
    client = new AWS.DynamoDB.DocumentClient({
        region: 'ap-northeast-2',
        accessKeyId,
        secretAccessKey,
    });
};
refresh();

export const query = async (
    tableName: string,
    keyConditionExpression: Expression,
    filterExpression?: Expression,
    option?: Option,
    index?: string,
): Promise<Array<any>> => {
    try {
        const parameter: AWS.DynamoDB.DocumentClient.QueryInput = {
            TableName: tableName,
            KeyConditionExpression: keyConditionExpression.expression,
            ExpressionAttributeNames: Object.assign(
                keyConditionExpression.names,
                filterExpression ? filterExpression.names : undefined,
            ),
            ExpressionAttributeValues: Object.assign(
                keyConditionExpression.values,
                filterExpression ? filterExpression.values : undefined,
            ),
            FilterExpression: filterExpression ? filterExpression.expression : undefined,
            IndexName: index ? index : undefined,
            ...option,
        };
        const result = await client.query(parameter).promise();
        return result.Items as any;
    } catch (error) {
        console.log('query', error);
        throw new Error(error);
    }
};

export const listTables = async () => {
    try {
        const tables = await dynamodb.listTables().promise();
        return tables;
    } catch (error) {
        console.log('list tables', error);
        throw new Error(error);
    }
};

export const getTableDescription = async (
    TableName: string,
): Promise<{
    KeySchema: Array<AWS.DynamoDB.KeySchemaElement>;
    tableName: string;
}> => {
    try {
        const table = await dynamodb
            .describeTable({
                TableName,
            })
            .promise();
        const { KeySchema } = table.Table as AWS.DynamoDB.TableDescription;
        const schema = KeySchema as Array<AWS.DynamoDB.KeySchemaElement>;
        return { KeySchema: schema, tableName: TableName };
    } catch (error) {
        console.log('get TableDescription', error);
        throw new Error(error);
    }
};
export class Dynamodb {
    private readonly client!: AWS.DynamoDB.DocumentClient;
    private readonly dynamodb!: AWS.DynamoDB;
    constructor(accessKeyId: string, secretAccessKey: string) {
        this.client = new AWS.DynamoDB.DocumentClient({
            region: 'ap-northeast2',
            accessKeyId,
            secretAccessKey,
        });
        this.dynamodb = new AWS.DynamoDB({
            region: 'ap-northeast2',
            accessKeyId,
            secretAccessKey,
        });
    }
    public query = async (
        tableName: string,
        keyConditionExpression: Expression,
        filterExpression?: Expression,
        option?: Option,
        index?: string,
    ): Promise<Array<any>> => {
        try {
            const parameter: AWS.DynamoDB.DocumentClient.QueryInput = {
                TableName: tableName,
                KeyConditionExpression: keyConditionExpression.expression,
                ExpressionAttributeNames: Object.assign(
                    keyConditionExpression.names,
                    filterExpression ? filterExpression.names : undefined,
                ),
                ExpressionAttributeValues: Object.assign(
                    keyConditionExpression.values,
                    filterExpression ? filterExpression.values : undefined,
                ),
                FilterExpression: filterExpression ? filterExpression.expression : undefined,
                IndexName: index ? index : undefined,
                ...option,
            };
            const result = await this.client.query(parameter).promise();
            return result.Items as any;
        } catch (error) {
            console.log('query', error);
            throw new Error(error);
        }
    };
    public listTables = async () => {
        try {
            const tables = await this.dynamodb.listTables().promise();
            return tables;
        } catch (error) {
            console.log('list tables', error);
            throw new Error(error);
        }
    };

    public getTableDescription = async (
        TableName: string,
    ): Promise<{
        KeySchema: Array<AWS.DynamoDB.KeySchemaElement>;
        tableName: string;
    }> => {
        try {
            const table = await this.dynamodb
                .describeTable({
                    TableName,
                })
                .promise();
            const { KeySchema } = table.Table as AWS.DynamoDB.TableDescription;
            const schema = KeySchema as Array<AWS.DynamoDB.KeySchemaElement>;
            return { KeySchema: schema, tableName: TableName };
        } catch (error) {
            console.log('get TableDescription', error);
            throw new Error(error);
        }
    };
}
