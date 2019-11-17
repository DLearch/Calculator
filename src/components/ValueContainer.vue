<template>
  <div class="value-container">
    <div class="expression">{{calc.operationsToDisplay}}</div>
    <div class="value">{{calc.valueToDisplay}}</div>
  </div>
</template>

<script>
export default {
  name: "CalculatorValueContainer",
  inject: ["calc"]
};
</script>

<style scoped>
.value-container {
  border: 1px solid black;
  min-width: 50px;
  height: 60px;
  grid-area: value;
  border-radius: 4px;
  background: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.value {
  font-size: 25px;
  font-weight: bold;
}

.expression {
  font-size: 20px;
}
</style>