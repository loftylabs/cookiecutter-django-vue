<template>
    <div class="card d-block procedure-card p-2">
    
              <div class="card-body">
                <div class="row">
                    <div class="col-8">
                    <slot name="main"></slot>
                    </div>
                    <div class="col-4 completion-stats">
                        <slot name="sidebar"></slot>
                    </div>
                </div>
              </div>
        
    </div>     


</template>
<script>
export default {
    name:"TwoColCard",
    
}
</script>
<style lang="scss" scoped>



.procedure-card:hover {
    border-color: #FFF;
}
.procedure-card {
    min-height: 250px;
}



.button-bar {
    position: absolute;
    top: 1em;
    right: 0;
}

.button-bar [class^=fe-] {
    color: #222;
}

.button-bar .btn {
    margin-right: 1em;
    cursor: pointer;
}

.confirm-btn{
    background: #00acc1 !important;
    border-width: 1px;
    border-style: solid;
}
.done-icon {
    font-size: 5em;
}

</style>
