interface BreadcrumbName {
    [key: string]: string;
}
export default {
    breadcrumbNameMap: {
        '/dashboard': '대시보드',
        '/datasource': 'Data Sources',
        '/start': '차트 추가',
        '/setting': '설정',
        '/chart': '차트',
        '/setting/aws': 'AWS',
        // '/setting/firebase': 'Firebase',
    } as BreadcrumbName,
};
