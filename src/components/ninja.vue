<template>
  <div class="ninja">
    <ul>
    <li v-for= "ninja in ninjas" v-on:click="ninja.show=!ninja.show"> 
      <h2> {{ ninja.name }} </h2>
      <h3 v-show="ninja.show"> {{ninja.age}} </h3>
    </li>

    </ul>
    <h1> {{ name }} </h1>
    <h2> {{ sale }}</h2>
    <h2> {{ amount }}</h2>
    <button v-on:click="reduceamount">reduce amount</button>
    <label>write </label><input type="text" v-model="new">
  </div>
    <h2>note: {{ hello }}</h2>  
  </div>
</template>

<script>
import{mapActions} from 'vuex';
import{mapGetters} from 'vuex';
export default {  

  
  computed: {
    ninjas(){ 
      return this.$store.state.ninjas ;
    },
    name(){
      return this.$store.state.profile ;
    },
    // sale(){
    //   return this.$store.getters.sale;
    // },
    // amount(){
    //   return this.$store.getters.amount;
    // }
    new(){
      return this.$store.state.message ;
    }
    
    ...mapGetters({
      amount : 'amount',
      hello : 'hello',  
      sale : 'sale',
       
    })
    

  },
  methods:{
    // reduceamount(){
    //   this.$store.commit("Reduceamount");
    // }
    
    reduceamount(){  
    this.$store.dispatch('Reduceamount')
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