<template>
    <div class="SearchHistory" v-if="items.length>0 && show">
        <ul class="ivu-list ivu-list-default ivu-list-horizontal ivu-list-bordered ivu-list-split">
            <li v-for="(item, index) in items" :key="index"
                class="clickItem ivu-list-item"
                @mouseover="onItemMouseOver(index)"
                @mouseout="onItemMouseOver(-1)"
                @click="onClickItem(index)">
                {{item}}
                <Icon type="md-close"
                      class="closeIco"
                      :class="mouseOver===index?'closeIcoHover':'closeIcoNo'"
                      @click="onClose(index)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
    import './_SearchHistory.scss'

    export default {
        props: {items: {type: Array}, show: {type: Boolean, default: false}},
        data() {
            return {
                mouseOver: -1
            }
        },
        methods: {
            onItemMouseOver(index) {
                this.mouseOver = index
            },
            onClose(index) {
                this.$emit("onDeleteItem", index)
            },
            onClickItem(index) {
                this.$emit("onClickItem", index)
            }
        }
    };
</script>
