<template>

    <p class="card-text" >
        <slot></slot>
    </p>

     


</template>
<script>
export default {
    name:"CardText",
    
}
</script>
<style scoped>
.card-text{
    padding: 10px;
}
</style>