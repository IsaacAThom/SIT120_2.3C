<template>
  <!-- 11, Router -->
  <div id="nav">
    <router-link to="/">Forms</router-link>
    <router-link to="/list">Lists</router-link>
    <router-link to="/event">Events</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
body {
  background: #e4e1e1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin-top: 60px;
}

#nav {
  background: #a7e3e6;
  padding: 5px;
  border: 2px solid rgb(0, 0, 0);
}

#nav a {
  margin-left: 5px;
  margin-right: 5px;
}

.column-half {
  float: left;
  width: 50%;
}
</style>
