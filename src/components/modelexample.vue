<template>
<div>
  <p> fullname: {{fullname}} </p>
  <label>fullname: </label><input type="text" v-model="fullname">
  <div>
 <label>firstname: </label><input type="text" v-model="firstname"> 
 </div>
 <div>  
  <label>lastname: </label><input type="text" v-model="lastname">
	</div>

</div>
</template>
<script>


export default {
  
  data () {
    return {
    	firstname: '',
      lastname: ''

    }
  },
  computed: {
      fullname:{
       get(){
         return this.firstname +' '+ this.lastname
            },
       set(value){
          var name = value
          this.firstname = name
          
       }
                }
            }
}
</script>

<style scoped>


  

</style>

