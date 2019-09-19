<template>
  <div>

    <div v-if="loading">LOADING</div>

    <div v-if="user && !error">
      <p>{{ user.name }}</p>
      <p>{{ Number(user.age) + 5 }}</p>
    </div>

    <div v-if="error">
      Une erreur est survenue
    </div>

  </div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      user: null,
      loading: false,
      error: false
    }
  },
  created() {
    this.loading = true;
    setTimeout(
      () => {
        // this.user = {
        //   name: "Kevin",
        //   age: 27
        // }
        this.user = "ERROR - Bad Request"
        this.loading = false;
      },
      2000
     )
  },
  watch: {
    loading(newLoading, oldLoading) {
      if (newLoading == false) {
        console.log('chargement fini')
        if (typeof this.user == 'object') {
          console.log('success')
          this.error = false
        } else {
          console.log('errur')
          this.error = true
        }
      }
    }
  }
}
</script>