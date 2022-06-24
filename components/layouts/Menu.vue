<template>
    <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['2']"
        mode="inline"
        theme="light"
    >
        <template v-for="item in MENU">
            <a-menu-item v-if="!item.children" :key="item.key">
                <span>{{ item.title }}</span>
            </a-menu-item>
            <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
    </a-menu>
</template>

<script>

    import SubMenu from '@/components/layouts/SubMenu.vue'
    import { MENU } from '@/constants/menu'

    export default {
        components: {
            SubMenu
        },
        data () {
            return {
                MENU
            }
        }

    // methods: {
    //     menuDynamic (menu) {
    //         menu.map((item) => {
    //             console.log(item)
    //             return 'dsad'
    //         })
    //     }
    // }
    }
</script>

<style lang="scss" scoped>

</style>
