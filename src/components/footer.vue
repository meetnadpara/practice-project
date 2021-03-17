<template>
  <div>
    <h1> {{copywrite}} </h1>
  </div>
</template>

<script>


export default {
	props:["copywrite"],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
h1 {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: blue;
  background-color: black;  
  text-align: center;
  
} 

</style>