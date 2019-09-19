<template>
  <div id="app">
    <slider 
      v-if="images"
      :pictures="images" 
    />
    <watcherExample/>
  </div>
</template>

<script>
import slider from './components/Slider'
import watcherExample from './components/watcherExample'

export default {
  name: 'app',
  data() {
    return {
      images: [
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
        "https://picsum.photos/500/350",
      ],
    }
  },
  components: { slider, watcherExample },
}
</script>
