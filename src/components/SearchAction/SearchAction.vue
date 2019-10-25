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
        props: {},
        data() {

            /**默认搜索项*/
            const defaultItems = [
                {
                    title: "百度",
                    colorBg: "#2319DC",
                    colorTop: "#2319DC",
                    isSelected: true
                },
                {
                    title: "谷歌",
                    colorBg: "#36A854",
                    colorTop: "#36A854"
                },
                {
                    title: "秘迹",
                    colorBg: "#575757",
                    colorTop: "#575757",
                    isSelected: true
                }
            ]

            /**恢复之前选中状态*/
            let items = this.getSelectItems() || defaultItems

            _.forEach(defaultItems, item => {
                item.isSelected = _.find(items, i => {
                    return i.title === item.title
                }).isSelected
            })

            return {
                actionItems: defaultItems
            }
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
                item.isSelected = isSelected
                this.saveSelectItems(item)
            }
        }
    };
</script>
