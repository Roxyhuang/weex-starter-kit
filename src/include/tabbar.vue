<template>
    <div class="tabbar">
        <div class="tabItem">
            <text>主页</text>
        </div>
        <div class="tabItem">
            <image></image>
            <text>列表</text>
        </div>
        <div class="tabItem">
            <image></image>
            <text>我的</text>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
<style scoped>
    .tabbar {
        position: fixed;
        display: flex;
        flex-direction: row;
        width: 750px;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: #cccccc;
        background-color: #fff;
        height: 120px;
        border-top-width: 1px;
        border-top-color: #b2b2b2;
        border-top-style: solid;
    }
    .tabItem {
        width: 250px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    .tabIcon {
        width: 70px;
        height: 70px;
    }
</style>