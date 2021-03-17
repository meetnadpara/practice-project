<template>
<div>
  <p> fullname: {{fullname}} </p>
  <lable>fullname: </lable><input type="text" v-model="fullname">
  <div>
 <lable>firstname: </lable><input type="text" v-model="firstname"> 
 </div>
 <div>  
  <lable>lastname: </lable><input type="text" v-model="lastname">
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
          var name = value.split(' ')
          this.firstname = name[0],
          this.lastname = name[name.length-1]
       }
                }
            }
}
</script>

<style scoped>


  

</style>

