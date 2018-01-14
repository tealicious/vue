<template>
    <div>
        <slot name="title"></slot>
        <span style="color:#ccc;">
            <!-- default content can be placed into a slot, and will render if nothing is passed into the slot  from the parent -->
            <slot name="subtitle">The Subtitle</slot>
        </span>
        <slot>
        </slot>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  border: 2px solid lightgray;
  text-align: center;
  padding: 20px;
  margin: 20px;
}
</style>