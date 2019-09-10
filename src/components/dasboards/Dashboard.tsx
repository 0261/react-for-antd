import React from 'react';
import LayoutCommon from '../common/Layout/Layout';
import styles from './Dashboard.scss';
interface Props {
    url: string;
}
const Dashboard: React.FunctionComponent<Props> = ({ children, url }) => {
    return <div className={styles.dashboard}>{children}</div>;
};

export default Dashboard;
