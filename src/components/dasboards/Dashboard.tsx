import React from 'react';
import styles from './Dashboard.scss';
interface Props {}
const Dashboard: React.FunctionComponent<Props> = ({ children }) => {
    return <div className={styles.dashboard}>This is Dashboard</div>;
};

export default Dashboard;
