<template>
    <!-- 10b + c, $emit and slots-->
    <button @click="$emit('someEvent', Math.random())"><slot></slot></button>
</template>

<style scoped>
button {
    background: rgb(239, 173, 31);
    color: black;
    padding: 10px;
    border: 2px dashed black;
    margin: 10px;
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.75);
    border-radius: 5px;
}

button:hover {
    box-shadow: inset 1px 1px 5px 1px rgba(0,0,0,0.75);
    border-style: solid;
}
</style>