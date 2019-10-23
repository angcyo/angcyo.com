<template>
    <div class="home">
        <div class="search_wrap">
            <CheckboxGroup v-model="border">
                <Checkbox label="香蕉" border></Checkbox>
                <Checkbox label="苹果" border></Checkbox>
                <Checkbox label="西瓜" border></Checkbox>
            </CheckboxGroup>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                border: ['香蕉','西瓜']
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
        width: 928px;
        height: 100px;
        background: aqua;
    }

</style>