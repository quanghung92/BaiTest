export const MENU = [
    { title: 'Home', icon: 's-user', link: '/tai-khoan', key: '1' },
    {
        title: 'Contract',
        icon: 's-user',
        key: '3',
        link: '/',
        children: [
            { title: 'Contract list', link: '/', key: '3.1' },
            { title: 'Create new contract', link: '/', key: '3.2' },
            { title: 'Approve contract', link: '/', key: '3.3' },
            { title: 'Approve user', link: '/', key: '3.4' },
            { title: 'Unblock contract', link: '/', key: '3.5' },
            { title: 'Unblock user', link: '/', key: '3.6' },
            { title: 'Reset pin/ password', link: '/', key: '3.7' }
        ]
    },
    {
        title: 'Fee management',
        icon: 's-user',
        link: '/tai-khoan',
        key: '4',
        children: [
            { title: 'Set fee', link: '/', key: '4.1' },
            {
                title: 'Transaction fee ',
                link: '/',
                key: '4.2',
                children: [
                    { title: 'Product fee', link: '/', key: '4.2.1' },
                    { title: 'Contract fee', link: '/', key: '4.2.2' },
                    { title: 'OTC fee', link: '/', key: '4.2.2' }
                ]
            },
            { title: 'Set fee share', link: '/', key: '4.3' }
        ]
    },
    {
        title: 'Limit management',
        icon: 's-user',
        link: '/tai-khoan',
        key: '5',
        children: [
            { title: 'Product limit', link: '/', key: '5.1' },
            { title: 'Contract limit', link: '/', key: '5.2' },
            { title: 'Wallet balance limit', link: '/', key: '5.3' }
        ]
    },
    {
        title: 'Transaction',
        icon: 's-user',
        link: '/tai-khoan',
        key: '6',
        children: [
            { title: 'Transaction history', link: '/', key: '6.1' },
            { title: 'Top Up to E-wallet', link: '/', key: '6.2' },
            { title: 'Withdrawal from E-wallet', link: '/', key: '6.3' },
            { title: 'Cash back ', link: '/', key: '6.4' },
            { title: 'Payroll ', link: '/', key: '6.5' },
            { title: 'Admin transaction', link: '/', key: '5.6' },
            { title: 'Reversal transaction', link: '/', key: '5.7' }
        ]
    },
    {
        title: 'System',
        icon: 's-user',
        link: '/tai-khoan',
        key: '7',
        children: [
            { title: 'Group management', link: '/', key: '7.1' },
            { title: 'User management', link: '/', key: '7.2' },
            { title: 'System parameter', link: '/', key: '7.3' }
        ]
    },
    {
        title: 'Report',
        icon: 's-user',
        link: '/tai-khoan',
        key: '8',
        children: [
            { title: 'Report list', link: '/', key: '8.1' }

        ]
    }
]
