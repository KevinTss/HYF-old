<template>
  <div>
    <!-- <transition-group name="fade" mode="out-in" tag="div" > -->
    <div class="active-image">
      <div v-for="i in pictures.length" :key="i" >
        <img 
          v-if="currentIndex==i-1" 
          :src="pictures[i-1] + '?' + i" 
        />
      </div>
    </div>
    <!-- </transition-group> -->
    <a class="prev" @click="prev" href="#">&#10094; Previous -</a>
    <a class="next" @click="next" href="#"> Next &#10095;</a>
    <div class="miniatures">
      <img 
        v-for="i in pictures.length"
        :src="pictures[i-1] + '?' + i" 
        :key="i" 
        class="min-image"
        @click="onImageClicked(i)"
      />
    </div>

    <div>
      {{ age }}
      {{ isMajorC }}
      <!-- {{ isMajorM() }} -->
    </div>

    <button @click="plus">PLUS</button>
    <button @click="moins">MOINS</button>


  </div>
</template>
<script>
export default {
  name: "Slider",
  props: {
    pictures: { type: Array, required: true }
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
      age: 10,
      isMajor: false
    };
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentThumbnail(){
      return this.thumbnails[Math.abs(this.currentIndex) % this.thumbnails.length];
    },
    isMajorC() {
      console.log('je suis passé par la computed')
      if (this.isMajor) {
        return "Majeur";
      } else {
        return "Mineur";
      }
    }
  },
  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 5000);
    },
    next() {
      if (this.currentIndex < this.pictures.length - 1) {
        this.currentIndex += 1;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      this.currentIndex > 0 && (this.currentIndex -= 1);
    },
    onImageClicked(index) {
      this.currentIndex = index - 1;
    },
    plus() {
      this.age++;
      this.isMajor = this.age >= 18;
    },
    moins() {
      this.age--;
      this.isMajor = this.age >= 18;
    },

    isMajorM() {
      console.log('je suis passé par la mathode')
      if (this.isMajor) {
        return "Majeur";
      } else {
        return "Mineur";
      }
    }
  },

  watch: {
    "currentIndex": {
      handler(newValue , oldValue) {
        console.log('pic changed', newValue)
      }
    }
  }
  
};
</script>
<style >
.prev {
  text-decoration: none;
  color: #436B7C;
  font-size: 1.5rem;
}
.prev:hover{
  color: inherit;
}
.next {
  text-decoration: none;
  color: #436B7C;
  font-size: 1.5rem;
}

.next:hover{
  color: inherit;
}

.fade-left-enter-active,
.fade-right-leave-active {
  transition-duration: .2s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.active-image {
  width: 500px;
  height: 350px;
  border: 1px solid black;
  position: relative;
}

.active-image div {
  width: 100%;
  height: 100%;
  position: absolute;
}

.active-image div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.miniatures .min-image {
  width: 100px;
  height: 75px;
  object-fit: cover;
  cursor: pointer;
}
.miniatures .min-image:not(:last-child) {
  margin-right: 5px;
}
</style>