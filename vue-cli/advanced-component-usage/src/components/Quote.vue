<template>
    <div class='wrap'>
        <div class='title'>
            <slot name='title'>I will get overridden when the parent provides content</slot>
            <span style='color:#ccc;'><slot name='subtitle'>override</slot></span>
        </div>
        <div class='content'>
            <slot name='content'>I will get overridden when the parent provides content</slot>
            <slot>I will get overridden when the parent provides content</slot>
            <p>I am a very fine, native quote!</p>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>
<style scoped>
div.wrap{
    margin:auto;
    border:2px solid lightgray;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:column nowrap;
    text-align:center;
}
p {
    margin:1rem 0;
}
.title {
    font-style: italic;
    color:firebrick;
}
</style>
