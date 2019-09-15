interface BreadcrumbName {
    [key: string]: string;
}
export default {
    breadcrumbNameMap: {
        '/dashboard': 'Dashboard',
        '/datasource': 'Data Sources',
        '/start': 'Getting Started',
        '/setting': 'Settings',
        '/chart': 'Charts',
        '/setting/aws': 'AWS',
        '/chart/pie': 'Pie',
        '/chart/bar': 'Bar',
        '/chart/network': 'Network',
        // '/setting/firebase': 'Firebase',
    } as BreadcrumbName,
};
