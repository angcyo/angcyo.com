<template>
    <div id="app">
        <transition name="fade" appear>
            <router-view/>
        </transition>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100%;
        width: 100%;
    }

</style>
