import React, { useState } from 'react';
import styles from './Dashboard.scss';
import { Sankey } from '@nivo/sankey';
import { Resizable, ResizableBox } from 'react-resizable';
import { contains } from '@typemon/dynamodb-expression';

interface Props {}

const Dashboard: React.FunctionComponent<Props> = ({ children }) => {
    return <div className={styles.dashboard}>dashboard</div>;
};

export default Dashboard;
