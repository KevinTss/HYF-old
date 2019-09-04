<template>
  <div id="app">
    <button id="test"></button>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate: function() {
    console.log('before create')
    const a = document.getElementById('test')
    console.log(a)
  },
  created() {
    console.log('created')
    const a = document.getElementById('test')
    console.log(a)
  },
  beforeMount() {
    console.log('before mount')
    const a = document.getElementById('test')
    console.log(a)
  },
  mounted() {
    console.log('mounted')
    const a = document.getElementById('test')
    console.log(a)
  },
  beforeUpdate() {
    console.log('before up')
  },
  updated() {
    console.log('u')
  },
  beforeDestroy() {
    console.log('dest')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>
