import React from 'react';
import { Form, Input, Button, Icon, Alert, message } from 'antd';

import { WrappedFormInternalProps } from 'antd/lib/form/Form';

interface Props extends WrappedFormInternalProps {}
interface FormValue {
    accesskey: string | null;
    secretkey: string | null;
}
class FormComponent extends React.Component<Props> {
    state = {
        accesskey: localStorage.getItem('accesskey'),
        secretkey: localStorage.getItem('secretkey'),
    };
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values: FormValue) => {
            if (!err) {
                this.setKey(values);
                message.success('저장 성공');
            }
        });
    };
    handleReset = (e: any) => {
        e.preventDefault();
        this.setKey({ accesskey: '', secretkey: '' });
        this.setState({
            accesskey: undefined,
            secretkey: undefined,
        });
        message.success('초기화 성공');
    };
    setKey(values: FormValue) {
        localStorage.setItem('accesskey', values.accesskey || '');
        localStorage.setItem('secretkey', values.secretkey || '');
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div
                style={{
                    padding: '24px',
                    background: '#fff',
                    minHeight: '100%',
                }}
            >
                <Alert
                    message='AWS 서비스 접근 권한'
                    description='AWS 서비스에 접근 가능한 접근키와 비밀키를 입력해주세요. 필요한 권한만 넣은 키를 넣는 것을 추천합니다.'
                    type='warning'
                    showIcon
                />
                <br />
                <Form onSubmit={this.handleSubmit} onReset={this.handleReset} className='aws-permission-form'>
                    <Form.Item>
                        {getFieldDecorator('accesskey', {
                            initialValue: this.state.accesskey,
                            rules: [{ required: true, message: 'Please input your aws Access Key' }],
                        })(
                            <Input
                                prefix={<Icon type='key' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='Access Key'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('secretkey', {
                            initialValue: this.state.secretkey,
                            rules: [{ required: true, message: 'Please input your Secret Key' }],
                        })(
                            <Input
                                prefix={<Icon type='key' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type='password'
                                placeholder='Secret Key'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' className='aws-permission-form-button'>
                            저장
                        </Button>
                        &nbsp;
                        <Button type='danger' htmlType='reset' className='aws-permission-reset-form-button'>
                            초기화
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const AwsPermissionFormContainer = Form.create({ name: 'aws' })(FormComponent);
export default AwsPermissionFormContainer;
