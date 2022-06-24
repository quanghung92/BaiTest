<template>
    <div>
        <div class="font-semibold text-2xl uppercase">
            Payroll services in bank
        </div>
        <FilterTable class="my-4 !bg-white p-4 rounded" />
        <Table class="bg-white p-4" />
    </div>
</template>

<script>
    import Table from '@/components/home/Table.vue'
    import FilterTable from '@/components/home/Filter.vue'
   
    export default {
        components: {
            Table,
            FilterTable,
           
        },
       
    }
</script>
