<template>
    <div class="SearchEdit">
        <div class="SearchWrap">
            <input type="text"
                   placeholder="搜你想搜..."
                   :value="value"
                   @input="$emit('input', $event.target.value)"
                   class="SearchInput">
            <div class="SearchActionWrap">
                <button class="SearchItem SearchMain" title="使用搜索引擎搜索"/>
                <button class="SearchItem SearchApi" title="搜索Android API文档"/>
                <button class="SearchItem SearchJcenter" title="搜索Bintray库"/>
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
    }
</script>
