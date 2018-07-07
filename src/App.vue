<template>
  <div id="app">
    <Headers />
    <router-view/>
    <Footers />
  </div>
</template>

<script>
import Headers from './components/header'
import Footers from './components/footer'

export default {
  name: 'app',
  components: {
    Headers,
    Footers
  }
}
</script>

<style>
#app {
  max-width: 1600px;
  margin: auto;
  background-color: #f5f5f5;
}
</style>
