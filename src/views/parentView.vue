<template>
  <div :style="myStyle" id="app">
    <div class="container  d-flex align-items-center " style="width: 500px; height: 600px ">
      
    <childProp :name="myName" @btn-click="doSomething()" />
    <!-- hna kayn class binding plus watcher  :)-->
    <button @click="changeName()" :disabled="false" class="{disabledButton}  button justify-content-center">Cliquer pour Pointer</button>
   
    <ButtonMix />
 
    <ButtonMixx/>
    
   
  </div>
  </div>
</template>

<script>
import childProp from "@/views/childProp";
import buttonMix from "@/views/buttonMix";
import buttonMixx from "@/views/buttonMixx";

//import testEv from "@/views/testEv.vue"


export default {
    emits: ['btn-click'],
  name: "parentView",
  components: {
    childProp, buttonMix, buttonMixx
    
},
  data() {
    
    return {
      myName: "Pointer",
      disabled: true,
      dataToggle: true,
      myStyle:{
            backgroundColor:"#fffff" 
            }
      
      
    };
  },
  methods: {
    changeName() {
      this.myName = "Vous venez de marquer votre présence, Merci!";
      //alert(this.myName);
    },
     doSomething(){
          //this.$emit('btn-click')
          alert('nice'),
          this.myStyle={
            backgroundColor:"#01488a" 
            }
        },
    
    
    
  },
  
};
</script>