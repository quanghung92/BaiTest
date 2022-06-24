<template>
    <div class="overflow-auto w-full whitespace-nowrap custom__scroll custom__scroll--small">
        <a-breadcrumb class="custom__breadcrumb">
            <template slot="separator">
                <div class="inline-block w-2 h-2 rounded-full" />
            </template>
            <a-breadcrumb-item v-for="(item, index) in breadCrumb" :key="index">
                <nuxt-link :to="item.link">
                    {{ item.label }}
                </nuxt-link>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script>
    export default {
        props: {
            breadCrumb: Array,
        },
    };
</script>

<style lang="scss">
.custom__breadcrumb.ant-breadcrumb {
    > span {
        @apply inline-flex items-center;

        .ant-breadcrumb-link {
            @apply leading-6;
            a {
                @apply text-[#606266]
            }
        }

        .ant-breadcrumb-separator {
            @apply inline-flex rounded-full ;
        }

        &:last-child {
            .ant-breadcrumb-separator {
                @apply hidden;
            }

            // .ant-breadcrumb-link {
            //     a {
            //         @apply ;
            //     }
            // }
        }
    }
}
</style>
