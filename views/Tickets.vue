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
      <DatePicker v-model="selectedDate" />
      {{ selectedDate }}
    </div>
    <hr id="selectDateUnderHr" />
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
    return { selectedDate };
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

<style>
.date {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 35px;
}

.title {
  font-size: 1.1em;
  font-family: "Poppins", sans-serif;
  color: #ff3333;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.title2 {
  font-family: "Poppins", sans-serif;
  margin-top: 5px;
  font-size: 1.4em;
  margin-left: 10px;
}
.title3 {
  font-family: "Poppins", sans-serif;
  position: relative;
  top: -25px;
  font-size: 1.4em;
  margin-left: 10px;
}

.underTitleText {
  font-family: "Poppins", sans-serif;
  color: #ff3333;
  position: relative;
  top: -40px;
  font-size: 0.75em;
  margin-left: 10px;
}
.selectDateBtn {
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  color: #d3d3d3;
  position: relative;
  top: -40px;
  background: transparent;
  border: none;
  padding: 5px 20px 2px 20px; /* Adjust padding for top and bottom */
  margin-bottom: -10px;
  text-decoration: none;
  cursor: pointer;
  transition: border-bottom-color 0.3s ease;
}
.selectDateBtn:active {
  color: red;
  padding-top: 3px;
}

.selectDateBtn:hover {
  border-bottom: 4px solid #ff3333;
  padding-top: 3px;
}
.selectDateBtn.clicked {
  color: #000;
}
#selectDateUnderHr {
  position: relative;
  top: -40px;
  color: li.;
}

#timeStamp {
  font-family: "Poppins", sans-serif;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  position: relative;
  top: -50px;
}

.counterRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}

.counterLabel {
  display: block;
  flex-grow: 1; /* Allow the label to grow and take available space */
  font-family: "Poppins", sans-serif;
}

.counterContainer {
  display: flex;
  flex-direction: row-reverse; /* Reverse the order of elements in the container */
  justify-content: space-between; /* Add space between elements */
  align-items: center; /* Vertically center elements */
}
.senioritiUnderlineText {
  font-family: "Poppins", sans-serif;
  font-size: 0.6em;
  color: #afafaf;
  position: relative;
  top: -20px;
}

#totalUpperRole {
  background-color: #ff3333;
  height: 2px;
}

.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  margin-top: -15px;
  margin-left: 10px;
  margin-right: 40px;
}

#payment {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#paymentBtn {
  font-family: "Poppins", sans-serif;
  font-size: 0.6em;
  border: none;
  color: white;
  background-color: #ff3333;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  /* box-shadow: 20px 2px 10px 10px; */
}

.counterBtn {
  height: 20px;
  width: 20px;
  margin-left: 10px; /* Add margin to create space between buttons */
  margin-right: 10px;
  color: #afafaf;
  border: 1px solid #afafaf;
  background-color: white;
}
#ages {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}
/* ... Existing CSS ... */
</style>
