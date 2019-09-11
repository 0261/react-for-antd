interface BreadcrumbName {
    [key: string]: string;
}
export default {
    breadcrumbNameMap: {
        '/dashboard': 'Dashboard',
        '/datasource': 'Data Sources',
        '/setting': 'Settings',
        '/setting/aws': 'AWS',
        // '/setting/firebase': 'Firebase',
    } as BreadcrumbName,
};
