<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <img src="./assets/back.png">-->
    <ul>
      <li v-for="item in model.items" :key="item.id">{{ item.from }}</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import api from '../mock/api.js';
// eslint-disable-next-line no-unused-vars
const a = '';
export default {
  data() {
    return {
      model: {
        items: []
      }
    };
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.created();
  },
  mounted() {

  },
  methods: {
    async created() {
      const { data } = await axios.get(api.getUserInfo);
      console.log(data.data);
      this.model.items = data.data.orders;
    }
  }
};
</script>

<style lang="scss">
/* stylelint-disable*/
/* stylelint-disable unit-whitelist*/
$black: black;
$yellow: yellow;

// $yellow: #FFFF00;
h2 {
  color: $black;
  background: linear-gradient($black, $yellow);
}
</style>
