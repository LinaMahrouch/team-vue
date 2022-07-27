<template>



<NavBar/>
  <router-view/>

</template>
<script>
import NavBar from "@/components/NavBar";
//import SpinApp from "./components/SpinApp.vue";
export default {
  name: 'App',
  components: { NavBar }
}
</script>
<style>

</style>
