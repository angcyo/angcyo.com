<template>
    <div class="SearchActionItem"
         :style="{borderTopColor: selected ? item.colorTop :'#EEEEEE'}"
         @click="onSelectChange">
        {{item.title}}
    </div>
</template>

<script>
    import './_SearchActionItem.scss'

    export default {
        props: {
            item: {
                title: String,
                colorTop: String,
                colorBg: String,
                color: String,
                url: String
            },
            isSelected: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                selected: this.isSelected
            }
        },
        watch: {
            isSelected(val) {
                this.selected = val
            }
        },
        methods: {
            onSelectChange() {
                this.selected = !this.selected
                this.$emit("onSelect", this.selected, this.item)
            }
        }
    };
</script>
