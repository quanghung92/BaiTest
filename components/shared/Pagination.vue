<template>
    <div v-if="total" class="flex mt-5 mb-3 items-center" :class="alignClass">
        <span v-if="showInfo" class="text-sm text-txt-80">
            Displaying {{ showInfo.currentSize }} of {{ total }}
        </span>
        <a-pagination
            v-if="total > pageSize"
            :page-size="+pageSize"
            :default-current="currentPage"
            :total="+total"
            show-size-changer
            @change="handleChangePage"
        />
    </div>
</template>

<script>
    import _omit from 'lodash/omit';
    import _assign from 'lodash/assign';
    import _has from 'lodash/has';

    export default {
        props: {
            currentPage: {
                type: [Number, String],
                default: 1,
            },
            total: {
                type: [Number, String],
                default: 1,
            },
            pageSize: {
                type: [Number, String],
                default: 12,
            },
            showInfo: {
                type: Object,
                default: null,
                validator: (obj) => _has(obj, 'currentSize'),
            },
            queryParam: {
                type: String,
                default: 'page',
            },
            align: {
                type: String,
                default: 'right',
            },
        },
        data() {
            return {
                pageSizeOptions: ['10', '20', '30', '40', '50'],
            }
        },

        computed: {
            alignClass() {
                if (this.showInfo) {
                    return 'justify-between';
                }
                return 'justify-end';
            },
        },

        methods: {
            handleChangePage(page) {
                this.$emit('onChange', page);
                this.$router.push(this.goto(page));
            },

            goto(page) {
                const path = this.$route.path;

                const otherParams = _omit(this.$route.query, [this.queryParam]);
            
                const query = page !== 1
                    ? _assign({}, this.$route.query, { [this.queryParam]: page })
                    : otherParams;

                return { path, query };
            },
        },
    };
</script>

<style lang="scss">
.ant-pagination-item {
    @apply rounded-full;

    &.ant-pagination-item-active {
        @apply bg-blue-300 text-white;
    }
}

.ant-pagination-prev, .ant-pagination-next {
    .ant-pagination-item-link {
        @apply rounded-full flex justify-center items-center;
    }
}
</style>
