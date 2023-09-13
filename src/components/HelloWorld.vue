<script setup>
// 3, Reactivity Fundamentals
import { ref, watch } from 'vue'

// Variables for the form
const newName = ref('')
const ageRange = ref('')
const colorFave = ref([])
const enjoyment = ref('')
const siblings = ref('')
const formMessage = ref('')
const lastMessage = ref('')
// Variable for v-html
const htmlExp = `<p style="border: 2px #cf6c9e solid">Pink box!</p>`
// Variables for id
const isIDActive = ref('false')
// Variable for 1d
const toBeMult = ref('5')

// 9, Watcher
  // Prints the updating values of formMessage and lastMessage to the console, as a way of demonstrating trim
watch(formMessage, (newMsg) => {
  console.log(`Potatoes is ${newMsg}`)
})
watch(lastMessage, (newLMsg) => {
  console.log(`Final Thoughts is ${newLMsg}`)
})
</script>

<template>
  <div class="box">
    
    <div class="column-half">
      <!-- 8a, form inputs followed by select -->
      <form>
        <label for="name">Enter Name:</label>
        <!-- 8b, .lazy -->
        <input type="text" id="name" name="name" v-model.lazy="newName">
        <p>How old are you?</p>
        <label for="13-22">13 - 22</label>
        <input type="radio" id="13-22" value="13 - 22" v-model="ageRange">
        <label for="23-32">23 - 32</label>
        <input type="radio" id="23-32" value="23 - 32" v-model="ageRange">
        <label for="33-42">33 - 42</label>
        <input type="radio" id="33-42" value="33 - 42" v-model="ageRange">
        <br>
        <label for="family">How many siblings do you have?</label>
        <!-- 8b, .number -->
        <input v-model.number="siblings" />
        <p>What are your favourite colours?</p>
        <label for="red">Red</label>
        <input type="checkbox" id="red" value="Red" v-model="colorFave">
        <label for="blue">Blue</label>
        <input type="checkbox" id="blue" value="Blue" v-model="colorFave">
        <label for="yellow">Yellow</label>
        <input type="checkbox" id="yellow" value="Yellow" v-model="colorFave">
        <label for="green">Green</label>
        <input type="checkbox" id="green" value="Green" v-model="colorFave">
        <label for="orange">Orange</label>
        <input type="checkbox" id="orange" value="Orange" v-model="colorFave">
        <label for="purple">Purple</label>
        <input type="checkbox" id="purple" value="Purple" v-model="colorFave">
        <p>Do you like potatoes?</p>
        <!-- 8b, .lazy -->
        <textarea id="message" name="message" v-model.lazy="formMessage"></textarea>
        <p>Any final thoughts?</p>
        <!-- 8b, .lazy .trim -->
        <textarea id="lastMessage" name="lastMessage" v-model.trim.lazy="lastMessage"></textarea>
      </form>
      <p>How would you rate this form?</p>
      <select v-model="enjoyment">
        <option>Enjoyable</option>
        <option>Alright</option>
        <option>Neutral</option>
        <option>Mediocre</option>
        <option>Abysmal</option>
        <option>N/A</option>
      </select>
    </div>
    
    <div class="column-half">
      <!-- 1a, Text Interpolation -->
      <p>Name: {{ newName }}</p>
      <p>Age: {{ ageRange }}</p>
      <p>No. of Siblings: {{ siblings }}</p>
      <p>Favourite Colours: <section v-for="color in colorFave" :key="color">{{ color }}</section></p>
      <p>Potatoes: {{ formMessage }}</p>
      <p>Final Thoughts: {{ lastMessage }}</p>
      <p>Enjoyment: {{ enjoyment }}</p>
      <hr>
      <p>{{ htmlExp }}</p>
      <!-- 1b, v-html -->
      <p v-html="htmlExp"></p>
      <!-- 1c, v-bind:id -->
      <label for="idbinder">True?</label>
      <input type="checkbox" id="idbinder" value="false" v-model="isIDActive">
      <p v-bind:id="isIDActive">If true, id = true</p>
      <label for="toBeMult">Pick a number</label>
      <br>
      <input type="number" id="toBeMult" v-model.lazy="toBeMult">
      <!-- 1d, javascript in {{  }} -->
      <p>{{ toBeMult }} * 5 = {{ toBeMult * 5 }}</p>
    </div>

  </div>
</template>

<style scoped>
.box {
  border: 2px solid rgb(21, 21, 21);
  padding: 5px;
  margin: 5px;
  overflow: hidden;
}

#true {
  background: rgb(10, 52, 31);
}
</style>
