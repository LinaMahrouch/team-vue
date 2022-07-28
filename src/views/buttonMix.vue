<template>
  <div> 
    
    <button class="button justify-content-center" v-on:click="clicked(2) ">
      Click to Multiply by 2
    </button>
  </div>
</template>
<script>
import mixin from "@/views/mixin.js";
export default {
  mixins: [mixin]
};
</script>