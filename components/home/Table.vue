<template>
    <div>
        <a-table :pagination="false" :columns="columns" :data-source="data">
            <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
        <Pagination :total="pagination.total" :show-info="{currentSize: 4}" />
    </div>
</template>

<script>
    import Pagination from '@/components/shared/Pagination.vue'
    const columns = [
        {
            title: 'Request No',
            dataIndex: 'requestNo',
            key: 'requestNo',
        },
        {
            title: 'Request Time',
            dataIndex: 'requestTime',
            key: 'requestTime',
        },
        {
            title: 'Created user',
            dataIndex: 'createdUser',
            key: 'address 1',
        },
        {
            title: 'Approval time',
            dataIndex: 'approvalTime',
            key: 'approvalTime',
        },
        {
            title: 'Debit account',
            dataIndex: 'debitAccount',
            key: 'debitAccount',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Approver',
            dataIndex: 'approver',
            key: 'approver',
            ellipsis: true,
        },
        {
            title: 'Reason to reject',
            dataIndex: 'reasonReject',
            key: 'reasonReject',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        }
    ]

    const data = [
        {
            key: '1',
            requestNo: '123456',
            requestTime: '06/03/2022  14:04:00',
            createdUser: 'bichdtn',
            approvalTime: '',
            debitAccount: '0001010200027395',
            amount:'6000',
            approver: 'VuTT',
            reasonReject: '',
            status:'Pending',
        },
        {
            key: '2',
            requestNo: '573756',
            requestTime: '06/03/2022  11:33:00',
            createdUser: 'bichdtn',
            approvalTime: '06/03/2022  13:51:00',
            debitAccount: '0001010200027395',
            amount:'6001',
            approver: 'VuTT',
            reasonReject: '',
            status:'Incompleted',
        },
        {
            key: '3',
            requestNo: '573757',
            requestTime: '07/03/2022  11:33:00',
            createdUser: 'bichdtn',
            approvalTime: '06/03/2022  11:26:00',
            debitAccount: '0001010200027395',
            amount:'6002',
            approver: 'VuTT',
            reasonReject: '',
            status:'Completed',
        },
        {
            key: '4',
            requestNo: '573758',
            requestTime: '08/03/2022  11:33:00',
            createdUser: 'bichdtn',
            approvalTime: '07/03/2022  11:26:00',
            debitAccount: '0001010200027395',
            amount:'6003',
            approver: 'VuTT',
            reasonReject: '',
            status:'Failed',
        },
          
        
    ]
    export default {
        components: {
            Pagination,
        },
        data () {
            return {
                data,
                columns,
                pagination: {total: 25, page: "1", perPage: 12, offset: 0}
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
