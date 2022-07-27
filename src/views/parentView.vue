<template>
  <div id="app">
    <div class="container  d-flex align-items-center " style="width: 500px; height: 600px ">
      
    <childProp :name="myName" />
    <!-- hna kayn class binding plus watcher  :)-->
    <button @click="changeName()" :disabled="false" class="{disabledButton}  button justify-content-center">Cliquer pour Pointer</button>
   
  </div>
  </div>
</template>

<script>
import childProp from "@/views/childProp";
//import testEv from "@/views/testEv.vue"


export default {
  name: "parentView",
  components: {
    childProp
    
},
  data() {
    
    return {
      myName: "Pointer",
      disabled: true,
      dataToggle: true
      
    };
  },
  methods: {
    changeName() {
      this.myName = "Vous venez de marquer votre présence, Merci!";
      //alert(this.myName);
    },
  },
  
};
</script>