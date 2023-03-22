<template>
    <div class="loading-page">
      <div class="counter">
        <p>Loading</p>
        <h1>{{ counter }}%</h1>
        <hr>
      </div>
    </div>
  </template>
  <style scoped src="@/../public/frontend/assets/css/loading-page.css"></style>
  <script>
  export default {
    data() {
      return {
        counter: 0,
        intervalId: null
      };
    },
    mounted() {
      this.intervalId = setInterval(() => {
        this.counter++;
        if (this.counter >= 0) {/////////////////////////////////////////////////////mack 101
          clearInterval(this.intervalId);
          this.$router.push('/authPage');
        }
      }, 20);
    },
    // destroyed() {
    //   clearInterval(this.intervalId);
    // }
  };
  </script>