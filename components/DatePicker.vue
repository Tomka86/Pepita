<template>
  <div id="dateInputContainer">
    <input
      id="otherInput"
      type="text"
      :value="selectedDateDisplay"
      @click="showDatePicker = !showDatePicker"
      :placeholder="selectedDateDisplay || 'Choose a date'"
    />
    <div class="datepicker-container" v-if="showDatePicker">
      <div class="datepicker">
        <input type="date" v-model="selectedDate" @input="handleDateChange" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "DatePicker",
  props: {
    value: Date,
  },
  setup(props) {
    const selectedDate = ref(props.value || "");
    const showDatePicker = ref(false);
    const selectedDateDisplay = ref("");

    const handleDateChange = () => {
      showDatePicker.value = false;
    };

    watch(selectedDate, (newValue) => {
      selectedDateDisplay.value = newValue;
    });

    return {
      selectedDate,
      showDatePicker,
      handleDateChange,
      selectedDateDisplay,
    };
  },
};
</script>

<style>
#dateInputContainer {
  display: flex;
  justify-content: center;
}
#otherInput {
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  position: relative;
  top: -36px;
}

.datepicker-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.datepicker {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
