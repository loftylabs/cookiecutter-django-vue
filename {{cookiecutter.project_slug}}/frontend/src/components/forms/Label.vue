<template>
    <label class="col-form-label my-1" :for="labelFor">
        <slot></slot>
    </label>
</template>

<script>

export default {
    name:"FormLabel",
    props:['labelFor'],
  

}
</script>

<style lang="scss" scoped="true">
 
</style>
