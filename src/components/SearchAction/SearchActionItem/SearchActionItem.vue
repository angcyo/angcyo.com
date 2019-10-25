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
                color: String
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
        methods: {
            onSelectChange() {
                this.selected = !this.selected
                this.$emit("onSelect", this.selected, this.item)
            }
        }
    };
</script>
