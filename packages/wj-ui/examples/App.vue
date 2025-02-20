<template>
    <div class="page">
        <header>wj-ui</header>
        <main>
            <RouterView />
        </main>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="css" scoped>
.page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}
main {
    flex: 1;
    width: 100%;
    position: relative;
}
</style>
