<script setup>
// 10a, props
    // Due to debug errors I had to disable eslint on defineProps
// eslint-disable-next-line
defineProps({
    title: String,
    count: Number
})
</script>

<template>
    <!-- 7b, Method Handlers -->
    <button @click="console.log(count)">{{ title }}</button>
    <br>
</template>