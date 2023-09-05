<template>
  <div>
    <input
      id="otherInput"
      type="text"
      :value="selectedDateDisplay"
      @click="showDatePicker = !showDatePicker"
      :placeholder="selectedDateDisplay || 'Other'"
    />
    <div v-if="showDatePicker">
      <div>
        <input type="date" v-model="selectedDate" @input="handleDateChange" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DatePicker",
  props: {
    value: Date, // Allows using v-model
  },
  setup(props) {
    const selectedDate = ref(props.value || "");
    const showDatePicker = ref(false);

    const handleDateChange = () => {
      showDatePicker.value = false; // Close the date picker when a date is selected
    };

    const selectedDateDisplay = ref("");

    return {
      selectedDate,
      showDatePicker,
      handleDateChange,
      selectedDateDisplay,
    };
  },
  watch: {
    selectedDate(newValue) {
      this.selectedDateDisplay = newValue;
    },
  },
};
</script>

<style>
#otherInput {
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  position: relative;
  top: -36px;
  width: 40%;
}
</style>
