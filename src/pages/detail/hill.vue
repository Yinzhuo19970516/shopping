<template>
    <div>
        星期五:
        {{ getTotalPrice }}
    </div>
</template>

<script>
export default {
  name: 'hill',
  data () {
    return {
    }
  },
  computed: {
    getTotalPrice () {
      return this.$store.getters.getTotalPrice
    }
  }
}
</script>

<style>
</style>
