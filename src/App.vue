<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from "./components/TheHeader.vue";
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
   TheHeader,
    TheFooter,
  },
}
</script>
<template>
  <TheHeader></TheHeader>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>


<style></style>
