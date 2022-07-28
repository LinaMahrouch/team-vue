export default {
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
  };