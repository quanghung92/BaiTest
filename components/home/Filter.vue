<template>
    <div>
        <div class="flex space-x-3">
            <div class="flex-1">
                <a-input class="w-full" placeholder="Request No" />
            </div>
            <div class="flex-1">
                <a-input class="w-full" placeholder="Debit account" />
            </div>
            <div class="flex-1">
                <a-input class="w-full" placeholder="Request Time" />
            </div>
        </div>
        <div class="flex space-x-3 mt-4">
            <div class="flex-1">
                <a-input class="w-full" placeholder="Approval datee" />
            </div>
            <div class="flex-1">
                <a-input class="w-full" placeholder="Request N0" />
            </div>
            <div class="flex-1">
                <a-select
                    show-search
                    placeholder="Status"
                    option-filter-prop="children"
                    class="w-full"
                >
                    <a-select-option v-for="item in selects" :key="item.id" :value="item.id">
                        {{ item.title }}
                    </a-select-option>
                </a-select>
            </div>
            <a-button type="primary" icon="search" class="btn--brand btn">
                Search
            </a-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selects: [
                    {id: 1, title: 'Pending'},
                    {id: 2, title: 'Incompleted'},
                    {id: 3, title: 'Completed'},
                    {id: 4, title: 'Failed'}
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>