<template>
  <div> 
    
    <button class="button justify-content-center" v-on:click="clicked(3)">
      Click to Multiply by 3
    </button>
   
  </div>
</template>
<script>
/*export default {
    name: "buttonMixx",
  data(){
      return {
          counter:1,
      }
  },
  methods: {
    clicked(value) {
      this.counter *= value
      alert(this.counter)
    }
  }
};*/
//before
import mixin from "@/views/mixin.js";
export default {
  mixins: [mixin]
};
</script>
