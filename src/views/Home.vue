<template>
    <div class="home">
        <div class="search_wrap">

            <SearchAction
                    @onSelectItems="onSelectItems">选择搜索引擎
            </SearchAction>

            <SearchEdit v-model="searchKey"
                        @onSearch="onSearch"
                        @onSearchApi="onSearchApi"
                        @onFocus="onFocus"
                        @onSearchJcenter="onSearchJcenter">搜索输入框
            </SearchEdit>

            <SearchHistory :items="historyItems"
                           :show="showHistory"
                           @onDeleteItem="onDeleteItem"
                           @onClickItem="onClickItem">搜索历史
            </SearchHistory>
        </div>
    </div>
</template>

<script>
    import SearchEdit from "@/components/SearchEdit/SearchEdit"
    import SearchAction from "@/components/SearchAction/SearchAction"
    import SearchHistory from "@/components/SearchHistory/SearchHistory"
    import _ from 'lodash'

    export default {
        name: 'home',
        components: {
            SearchEdit,
            SearchAction,
            SearchHistory
        },
        data() {
            return {
                searchKey: '',
                searchItems: [],
                historyItems: [],
                showHistory: false
            }
        },
        mounted() {
            this.historyItems = this.getSearchHistory()
        },
        methods: {
            onSelectItems(items) {
                //选中的搜索引擎
                this.searchItems = items
            },
            onSearchJcenter() {
                this.checkParams(false, () => {
                    this.saveSearchHistory(this.searchKey)
                    window.open(`https://jcenter.bintray.com/` + this.doUrl(this.searchKey))
                })
            },
            onSearchApi() {
                this.checkParams(false, () => {
                    this.saveSearchHistory(this.searchKey)
                    window.open(`https://developer.android.google.cn/reference/` + this.doUrl(this.searchKey))
                })
            },
            onSearch() {
                this.checkParams(true, () => {
                    this.saveSearchHistory(this.searchKey)
                    _.forEach(this.searchItems, item => {
                        if (item.isSelected) {
                            //同时打开多个窗口, 会被浏览器拦截
                            window.open(item.url + this.searchKey, "_blank").location
                        }
                    })
                })
            },
            checkParams(checkSearch, success) {
                if (this.searchKey && this.searchKey !== '') {
                    if (!checkSearch || _.find(this.searchItems, item => {
                        return item.isSelected === true
                    })) {
                        success()
                    } else {
                        this.$Message.error("请勾选需要使用的搜索引擎!")
                    }
                } else {
                    this.$Message.error("请输入搜索关键字!")
                }
            },
            doUrl(raw) {
                return raw.replace(/\s*/g, "").replace(/\./g, "/").replace('/html', '.html').replace(':', '/')
            },
            getSearchHistory() {
                const itemsString = window.localStorage.getItem("history_items")
                return JSON.parse(itemsString) || []
            },
            saveSearchHistory(searchKey) {
                const items = this.getSearchHistory()
                _.remove(items, item => {
                    return item === searchKey
                })
                items.unshift(searchKey)
                window.localStorage.setItem("history_items", JSON.stringify(items))

                this.historyItems = this.getSearchHistory()
            },
            onDeleteItem(index) {
                this.historyItems.splice(index, 1)
                window.localStorage.setItem("history_items", JSON.stringify(this.historyItems))
            },
            onClickItem(index) {
                this.searchKey = this.historyItems[index]
                this.showHistory = false
            },
            onFocus(focused) {
                if (focused) {
                    this.showHistory = true
                } else {
                    window.setTimeout(() => {
                        this.showHistory = false
                    }, 100)
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