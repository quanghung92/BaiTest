<template>
    <div class=" flex flex-col items-stretch min-h-screen overflow-hidden bg-gray-50">
        <Header class="object-contain" />
        <div class="flex h-full flex-1">
            <Menu class="w-72" />
            <nuxt class="p-6 flex-1" />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Menu from '@/components/layouts/Menu.vue'
    import Header from '@/components/layouts/Header.vue'
    import Footer from '@/components/layouts/Footer.vue'
    export default {
        components: {
            Menu,
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>
