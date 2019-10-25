<template>
    <div class="SearchAction">
        <SearchActionItem v-for="item in actionItems" :item="item" :key="item.title" :isSelected="item.isSelected"
                          @onSelect="onItemSelect"/>
    </div>
</template>

<script>
    import SearchActionItem from "@/components/SearchAction/SearchActionItem/SearchActionItem"
    import './_SearchAction.scss'
    import _ from 'lodash'

    export default {
        components: {SearchActionItem},
        props: {
            selectMode: {
                type: Number,
                default: 1, //1单选, 2多选
                validate(value) {
                    return value === 1 || value === 2
                }
            }
        },
        data() {
            return {
                /**默认搜索项*/
                defaultItems: [
                    {
                        title: "百度",
                        colorTop: "#2319DC",
                        isSelected: true,
                        url: "https://www.baidu.com/s?wd="
                    },
                    {
                        title: "谷歌",
                        colorTop: "#36A854",
                        url: "https://www.google.com/search?&q="
                    },
                    {
                        title: "秘迹",
                        colorTop: "#575757",
                        url: "https://mijisou.com/?q="
                    },
                    {
                        title: "必应",
                        colorTop: "#00EDE9",
                        url: "https://www.bing.com/search?q="
                    },
                    {
                        title: "搜狗",
                        colorTop: "#FE6A13",
                        url: "https://www.sogou.com/web?query="
                    },
                    {
                        title: "360搜索",
                        colorTop: "#0FB264",
                        url: "https://www.so.com/s?q=123"
                    }
                ],
                actionItems: []
            }
        },
        created() {
            this.initDefaultItems()
        },
        methods: {
            /**获取选中的历史记录*/
            getSelectItems() {
                const itemsString = window.localStorage.getItem("selected_items")
                let items = []
                if (itemsString) {
                    items = JSON.parse(itemsString)
                }
                return items
            },
            /**保存历史记录*/
            saveSelectItems(item) {
                if (item) {
                    const allItems = this.getSelectItems()
                    _.remove(allItems, i => {
                        return i.title === item.title
                    })
                    allItems.push(item)
                    window.localStorage.setItem("selected_items", JSON.stringify(allItems))
                }
            },
            /**事件*/
            onItemSelect(isSelected, item) {
                if (isSelected) {
                    this.clearSelect()
                }
                item.isSelected = isSelected
                this.saveSelectItems(item)
                this.$emit("onSelectItems", this.getSelectItems())
                if (this.selectMode === 1) {
                    this.initDefaultItems()
                }
            },
            clearSelect() {
                if (this.selectMode === 1) {
                    //单选
                    const allItems = this.getSelectItems()
                    _.forEach(allItems, item => {
                        item.isSelected = false
                    })
                    window.localStorage.setItem("selected_items", JSON.stringify(allItems))
                }
            },
            initDefaultItems() {
                /**恢复之前选中状态*/
                let items = this.getSelectItems() || this.defaultItems

                _.forEach(this.defaultItems, item => {
                    const findItem = _.find(items, i => {
                        return i.title === item.title
                    })

                    if (findItem) {
                        item.isSelected = findItem.isSelected || false
                    }
                })

                this.actionItems = this.defaultItems
                this.$emit("onSelectItems", this.defaultItems)
                this.$forceUpdate()
            }
        }
    };
</script>
