<template>
    <div class="home">
        <div class="search_wrap">
            <SearchAction @onSelectItems="onSelectItems">选择搜索引擎</SearchAction>
            <SearchEdit v-model="searchKey"
                        @onSearch="onSearch"
                        @onSearchApi="onSearchApi"
                        @onSearchJcenter="onSearchJcenter">搜索输入框
            </SearchEdit>
        </div>
    </div>
</template>

<script>
    import SearchEdit from "@/components/SearchEdit/SearchEdit"
    import SearchAction from "@/components/SearchAction/SearchAction"
    import _ from 'lodash'

    export default {
        name: 'home',
        components: {
            SearchEdit,
            SearchAction
        },
        data() {
            return {
                searchKey: '',
                searchItems: []
            }
        },
        methods: {
            onSelectItems(items) {
                //选中的搜索引擎
                this.searchItems = items
            },
            onSearchJcenter() {

            },
            onSearchApi() {

            },
            onSearch() {
                if (this.searchKey && this.searchKey !== '') {
                    if (_.find(this.searchItems, item => {
                        return item.isSelected === true
                    })) {
                        _.forEach(this.searchItems, item => {
                            if (item.isSelected) {
                                //同时打开多个窗口, 会被浏览器拦截
                                window.open(item.url + this.searchKey, "_blank").location
                            }
                        })
                    } else {
                        this.$Message.error("请勾选需要使用的搜索引擎!")
                    }
                } else {
                    this.$Message.error("请输入搜索关键字!")
                }
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
        transform: translateY(-100px);
    }

</style>