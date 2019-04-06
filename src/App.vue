<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from './components/index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
body{
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
