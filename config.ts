interface BreadcrumbName {
    [key: string]: string;
}
export default {
    breadcrumbNameMap: {
        '/dashboard': 'Dashboard',
        '/datasource': 'Data Sources',
        '/setting': 'Settings',
        '/chart': 'Charts',
        '/setting/aws': 'AWS',
        '/chart/pie': 'Pie',
        '/chart/bar': 'Bar',
        '/chart/network': 'network',
        // '/setting/firebase': 'Firebase',
    } as BreadcrumbName,
};
