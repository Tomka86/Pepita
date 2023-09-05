<template>
  <div>
    <HamburgerMenu />
    <h1 class="title">Plan Your Visit</h1>
    <div>
      <h1 class="title2">Skip the Line.</h1>
      <h1 class="title3">Purchase Tickets.</h1>
      <p class="underTitleText">
        All exhibitions, audio tours, and films <br />
        included in the price of admission
      </p>
    </div>
    <div class="date">
      <button
        class="selectDateBtn"
        v-on:click="getToday"
        :class="{ clicked: selectedButton === 'today' }"
      >
        Today
      </button>
      <button
        class="selectDateBtn"
        v-on:click="getTomorrow"
        :class="{ clicked: selectedButton === 'tomorrow' }"
      >
        Tomorrow
      </button>
      <button class="selectDateBtn" id="other" @click="toggleDatePicker">
        Other
      </button>
      {{ selectedDate }}
    </div>
    <hr id="selectDateUnderHr" />
    <DatePicker ref="datePicker" v-model="selectedDate" v-if="showDatePicker" />
    <div id="timeStamp">
      <p>
        {{ timeStamp }}<br />
        Open 10:30am-5:30pm
      </p>
    </div>
    <div id="ages">
      <div class="counterRow">
        <div class="counterLabel">
          <p>Adults</p>
        </div>
        <div class="counterContainer">
          <button class="counterBtn" v-on:click="addAdult">+</button>
          <p :style="{ color: adultsNumber === 0 ? '#afafaf' : 'black' }">
            {{ adultsNumber }}
          </p>
          <button class="counterBtn" v-on:click="subtractAdult">-</button>
        </div>
      </div>
      <div class="counterRow">
        <div class="counterLabel">
          <p>Seniors</p>
          <p class="senioritiUnderlineText">65+ with ID</p>
        </div>
        <div class="counterContainer">
          <button class="counterBtn" v-on:click="addSenior">+</button>

          <p :style="{ color: seniorsNumber === 0 ? '#afafaf' : 'black' }">
            {{ seniorsNumber }}
          </p>
          <button class="counterBtn" v-on:click="subtractSenior">-</button>
        </div>
      </div>
      <div class="counterRow">
        <div class="counterLabel">
          <p>Students</p>
          <p class="senioritiUnderlineText">with ID</p>
        </div>
        <div class="counterContainer">
          <button class="counterBtn" v-on:click="addStudent">+</button>

          <p :style="{ color: studentsNumber === 0 ? '#afafaf' : ' black' }">
            {{ studentsNumber }}
          </p>
          <button class="counterBtn" v-on:click="subtractStudent">-</button>
        </div>
      </div>
    </div>
    <hr id="totalUpperRole" />
    <div class="total">
      <p>Total</p>
      <p>${{ total }}</p>
    </div>
    <div id="payment">
      <button id="paymentBtn">Continue to Payment</button>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "../components/Navbar.vue";
import { ref } from "vue";
import DatePicker from "../components/DatePicker.vue";

export default {
  name: "Tickets",
  components: {
    HamburgerMenu,
    DatePicker,
  },
  setup() {
    const selectedDate = ref("");
    const showDatePicker = ref(false);

    return { selectedDate, showDatePicker };
  },
  data() {
    return {
      adultsNumber: 0,
      seniorsNumber: 0,
      studentsNumber: 0,
      adultPrice: 8,
      seniorPrice: 6,
      studentPrice: 4,
      total: 0,
      timeStamp: "",
      selectedButton: null,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    addAdult() {
      this.adultsNumber += 1;
      this.totalPrice();
    },
    subtractAdult() {
      if (this.adultsNumber > 0) {
        this.adultsNumber -= 1;
        this.totalPrice();
      }
    },
    addSenior() {
      this.seniorsNumber += 1;
      this.totalPrice();
    },
    subtractSenior() {
      if (this.seniorsNumber > 0) {
        this.seniorsNumber -= 1;
        this.totalPrice();
      }
    },
    addStudent() {
      this.studentsNumber += 1;
      this.totalPrice();
    },
    subtractStudent() {
      if (this.studentsNumber > 0) {
        this.studentsNumber -= 1;
        this.totalPrice();
      }
    },
    totalPrice() {
      this.total =
        this.adultsNumber * this.adultPrice +
        this.seniorsNumber * this.seniorPrice +
        this.studentsNumber * this.studentPrice;
    },
    getToday() {
      const options = { month: "long", day: "numeric", year: "numeric" };
      this.timeStamp = new Date().toLocaleDateString(undefined, options);
      this.selectedButton = "today";
    },
    getTomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const options = { month: "long", day: "numeric", year: "numeric" };
      this.timeStamp = tomorrow.toLocaleDateString(undefined, options);
      this.selectedButton = "tomorrow";
    },
  },
};
</script>
