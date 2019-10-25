<template>
    <div class="home">
        <div class="search_wrap">
            <SearchAction>选择搜索引擎</SearchAction>
            <SearchEdit v-model="searchKey">搜索输入框</SearchEdit>
        </div>
    </div>
</template>

<script>
    import SearchEdit from "@/components/SearchEdit/SearchEdit"
    import SearchAction from "@/components/SearchAction/SearchAction"

    export default {
        name: 'home',
        components: {
            SearchEdit,
            SearchAction
        },
        data() {
            return {
                searchKey: ''
            }
        }
    }
</script>

<style scoped>

    .home {
        height: 100%;
        width: 100%;
        text-align: center;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search_wrap {
        width: 718px;
        /*background: rgba(19, 9, 6, 0.09);*/
    }

</style>