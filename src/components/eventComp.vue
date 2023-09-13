<script setup>
// 3, Reactivity Fundamentals
import { ref } from 'vue'
import NewButton from './newButton.vue'

const count = ref(2)
const count2 = ref(0)

// 2, Methods
function compareCount() {
    if (count.value > 5) {
        alert(`${count.value} is greater than 5`)
    }
    else if (count.value == 5) {
        alert(`${count.value} is 5`)
    }
    else {
        alert(`${count.value} is less than 5`)
    }
}
</script>

<template>
    <div class="column-half">
        <!-- 7a, inline handlers -->
        <button @click="count++">Add to the count</button>
        <button @click="count--">Remove from the count</button>
        <p>Count is <b>{{ count }}</b></p>
        <!-- 7b, method handlers -->
        <button @click="compareCount()">Is the count greater than 5?</button>
    </div>
    <div class="column-half">
        <!-- 10b + c, $emit and slots -->
        <NewButton @some-event="(i) => count2 += i"> 
        Add to it!
        </NewButton>
        <br>
        <NewButton @some-event="(i) => count2 -= i">
        Subtract from it!
        </NewButton>
        <br>
        {{ count2 }}
    </div>
</template>