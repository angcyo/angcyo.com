<template>
    <div class="home">
        <div class="search_wrap">
<!--            <Input v-model="search_word" search enter-button="Search" placeholder="搜你想搜..." size="large" clearable autofocus/>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                search_word: ''
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
        width: 521px;
        height: 100px;
        /*background: aqua;*/
    }

</style>