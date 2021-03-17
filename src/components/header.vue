<template>
<header>  
    <h1 v-on:click="changetitle"> {{title}} </h1>
</header>  
</template>

<script>


export default {
	props:["title"],
  
  data () {
    return {

    }
  },
  methods:{
    changetitle(){
      this.title="new title"
    }
  }
}
</script>

<style scoped>

header {
  background-color:yellow;
  color: orange;
  text-align: center;
  
  
} 

</style>