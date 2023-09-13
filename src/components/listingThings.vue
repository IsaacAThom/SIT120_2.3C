<script setup>
// 3, Reactivity Fundamentals
import { ref, reactive, computed } from 'vue'
// imported component
import ButtonCount from './buttonCount.vue'
const items = ref([
    {
        name: 'First Item',
        number: 8,
    },
    {
        name: 'Second Item',
        number: 9,
    }
    ])

// Array for Prop passing
const buttons = ref([
    {
        id: 1,
        title: 'Button Text 1',
        count: 5
    },
    {
        id: 2,
        title: 'Something different!',
        count: 2
    }
])
// variables for computed properties
const artPalette = reactive(
    {
        name: 'Isaac McKissack',
        colours: []
    }
)
// If any data in artPalette.colours, return yes
const coloursInPalette = computed(() => {
    return artPalette.colours.length > 0 ? 'Yes' : 'No'
})
// style to pass to a div
const newStyle = reactive({
    color: '#2f2154',
    border: '3px solid black',
    padding: '5px',
    margin: '2px'
})

</script>
<template>
    <h1>V-Fors</h1>
    <div class="column-half">
        <h3>Template</h3>
        <!-- 6a, v-for with an Object -->
        <!-- 6c, v-for on template -->
        <template v-for="item in items" :key="item">
            <p>{{ item.name }}</p>
            <p>{{ item.number }}</p>
        </template>
    </div>
    <div class="column-half">
        <h3>Non-Template</h3>
        <div v-for="item in items" :key="item">
            <p>{{ item.name }}</p>
            <p>{{ item.number }}</p>
        </div>
    </div>
    <hr>
    <div class="column-half">
        <ul>
            <!-- 6b, v-for with range -->
            <!-- 6d, v-for with v-if -->
            <li v-for="x in 5" :key="x">
                <p v-if="x == 1">This is the first message, message {{ x }}</p>
                <p v-else-if="x == 5">This is the last message, message {{ x }}</p>
                <p v-else>This is message {{ x }}</p>
            </li>
        </ul>
    </div>
    <!-- 6e, v-for with a Component -->
        <!-- Passes a title for the button, and a number to print in the console log, per item in array -->
    <div class="column-half">
        <ButtonCount
        v-for="counts in buttons"
        :key="counts.id"
        :title="counts.title"
        :count="counts.count"
        ></ButtonCount>
        <p>Add colours to the palette!</p>
        <input type="checkbox" id="red" value="red" v-model="artPalette.colours">
        <label for="red">Red</label>
        <input type="checkbox" id="blue" value="blue" v-model="artPalette.colours">
        <label for="blue">Blue</label>
        <input type="checkbox" id="yellow" value="yellow" v-model="artPalette.colours">
        <label for="yellow">Yellow</label>
        <input type="checkbox" id="green" value="green" v-model="artPalette.colours">
        <label for="green">Green</label>
        <p>Are there colours in the palette?</p>
        <!-- 4, Computed Properties -->
        <!-- 5a, Binding HTML class -->
        <div :class="coloursInPalette">{{ coloursInPalette }}</div>
        <!-- 5b, Binding inline style -->
        <div :style="newStyle">This box is taking its style from an object!</div>
    </div>
</template>

<style scoped>
/* Rules which show that one v-for is in a div and one isnt */
.column-half p {
    background: rgb(250, 112, 135);
}

.column-half div p {
    background: rgb(255, 255, 132);
}
/* This rule doesn't work because template isn't visible in the DOM */
.column-half template p {
    background: green;
}

.Yes {
    background: rgb(134, 227, 134);
}

.No {
    background: #2e2152;
    color: white;
}
</style>