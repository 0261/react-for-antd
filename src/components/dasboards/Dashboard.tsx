import React from 'react';
import LayoutCommon from '../common/Layout/Layout';
import styles from './Dashboard.scss';
interface Props {}
const Dashboard: React.FunctionComponent<Props> = ({ children }) => {
    return <div className={styles.dashboard}>{children}</div>;
};

export default Dashboard;
