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
    import axios from 'axios'

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
                actionItems: []
            }
        },
        created() {
            /**默认搜索项*/
            axios.get('./search_action.json')
                .then(res => {
                    this.actionItems = res.data
                    this.initDefaultItems()
                })
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
                    const allItems = this.actionItems
                    _.forEach(allItems, item => {
                        item.isSelected = false
                    })
                    window.localStorage.setItem("selected_items", JSON.stringify(allItems))
                }
            },
            initDefaultItems() {
                /**恢复之前选中状态*/
                const selectItems = this.getSelectItems()
                let findSelected = false

                _.forEach(this.actionItems, item => {
                    if (findSelected && this.selectMode === 1) {
                        //单选模式
                        item.isSelected = false
                    } else {
                        const findItem = _.find(selectItems, i => {
                            return i.title === item.title
                        })

                        if (findItem) {
                            item.isSelected = findItem.isSelected || false
                        }
                    }

                    if (item.isSelected) {
                        findSelected = true
                    }
                })

                this.$emit("onSelectItems", this.actionItems)
                this.$forceUpdate()
            }
        }
    };
</script>
