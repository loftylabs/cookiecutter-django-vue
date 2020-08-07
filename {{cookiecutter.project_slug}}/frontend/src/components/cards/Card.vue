<template>
    <div class="card p-3">
        <h3 class="card-title">
            <slot name="card-title"></slot>
        </h3>
        <p class="card-text">
            <slot name="card-text"></slot>
        </p>
        <div>
            <slot name="card-footer"></slot>
        </div>
    </div>     


</template>
<script>
export default {
    name:"Card",
    
}
</script>
<style lang="scss" scoped>


</style>
