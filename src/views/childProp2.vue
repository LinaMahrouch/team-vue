<template>
<div class="container  d-flex align-items-center justify-content-center" >
  <div class="col-md-12 text-center ">
  <div class="child">{{ name2 }}
 
  </div>
  </div>
  
  </div>
</template>

<script>
export default {
  name: "childProp2",
  props: {
    name: {
      type: String,
    },
  },
  watch: { // It listens to the change in prop name
    name: function () {
      console.log("name change"); // print out when the name changes
    },
  },
};
</script>