<template>
  <div class="ninja">
    <ul>
    <li v-for= "ninja in ninjas" v-on:click="ninja.show=!ninja.show"> 
      <h2> {{ ninja.name }} </h2>
      <h3 v-show="ninja.show"> {{ninja.age}} </h3>
    </li>

    </ul>
  </div>
</template>

<script>
export default {  
props:["ninjas"],
  data () {
    return {
  
    }
  }
}
</script>

<style scoped>
.ninja{
  color:red;
  width:1200px;
  shadow:1 px; 

}
ul{
  display:flex;
  flex-wrap:wrap;
  list-style-type:none;
  padding:0;
}
li{
  test-align:center;
  padding:30px;
  border:1px solid black;
  margin:10px;
}
</style>