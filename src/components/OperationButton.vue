<template>
    <button 
        class='operation-button' 
        v-bind:name="operation.name" 
        v-on:click='calc.performOperation(operation)'
        v-bind:class="operation.name" 
        v-bind:style="{gridArea: operation.name}"
        > 
        {{ operation.symbol }}
    </button>
</template>

<script>
export default {
    name: 'OperationButton',
    props: ['operation'],
    inject: ['calc']
}
</script>
<style scoped>

.operation-button {
    height: 50px;
    min-width: 50px;
    background: yellow;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 20px;
    line-height: 30px;
}

.operation-button:hover {
    background: rgba(255, 255, 0, 0.8);
}

.operation-button:active {
    height: 48px;
}

</style>