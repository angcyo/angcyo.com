<template>
    <div class="SearchEdit">
        <div class="SearchWrap">
            <input type="text"
                   placeholder="搜你想搜..."
                   :value="value"
                   @input="$emit('input', $event.target.value)"
                   @keyup.enter="onEnter"
                   class="SearchInput">
            <div class="SearchActionWrap">
                <button class="SearchItem SearchMain" title="使用搜索引擎搜索" @click="onEnter"/>
                <button class="SearchItem SearchApi" title="搜索Android API文档" @click="onSearchApi"/>
                <button class="SearchItem SearchJcenter" title="搜索Bintray库" @click="onSearchJcenter"/>
            </div>
        </div>
    </div>
</template>

<script>
    import './_SearchEdit.scss'

    export default {
        props: {
            value: String
        },
        methods: {
            onEnter() {
                //发送需要搜索的事件
                this.$emit("onSearch", this.value)
            },
            onSearchApi() {
                this.$emit("onSearchApi", this.value)
            },
            onSearchJcenter() {
                this.$emit("onSearchJcenter", this.value)
            },
        }
    }
</script>
