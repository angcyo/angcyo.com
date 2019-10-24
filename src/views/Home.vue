<template>
    <div class="home">
        <div class="search_wrap">
            <!--            <Input v-model="search_word" search enter-button="Search" placeholder="搜你想搜..." size="large" clearable autofocus/>-->
            <SearchEdit v-model="searchKey">search</SearchEdit>
        </div>
    </div>
</template>

<script>
    import SearchEdit from "@/components/SearchEdit/SearchEdit"

    export default {
        name: 'home',
        components: {
            SearchEdit
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
        height: 100px;
        /*background: aqua;*/
    }

</style>