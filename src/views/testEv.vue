<template>
  <div class="toggleContainer">
    <div id="on" @click="switched(true)" :class="{active: value}">ON</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">OFF</div>
  </div>
</template>

<script>
export default {
    name: "testEv",
  props: ["value"],
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
    }
  }
};
</script>

<style scoped>
.toggleContainer {
  margin-top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#on,
#off {
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: lightgray;
  padding: 2px;
  text-align: center;
  margin: 10px -5px;
  cursor: pointer;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>