<template>
  <div class="container">
    <ValueContainer />
    <OperationButton
      v-for="operation in operations"
      :key="operation.name"
      v-bind:operation="operation"
    />
  </div>
</template>

<script>
import { MathCalculator } from "../calculator/math-calculator/math-calculator";
import ValueContainer from "./ValueContainer";
import OperationButton from "./OperationButton";

export default {
  name: "Calculator",
  components: {
    ValueContainer,
    OperationButton
  },
  data: function() {
    return new MathCalculator();
  },
  provide: function() {
    return {
      calc: this.$data
    };
  }
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 2px;
  height: 100vh;
  margin: 0;
  grid-template-areas:
    "value          value       value       value"
    "valueCleaning  cleaning    backspace   division"
    "number7        number8     number9     multiplication"
    "number4        number5     number6     subtraction"
    "number1        number2     number3     addition"
    "negation       number0     dot         result";
}
</style>