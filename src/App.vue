<template>
  <div>
  	<app-header v-bind:title="title" ></app-header>
  	<app-ninja></app-ninja>
  	<app-footer v-bind:copywrite="copywrite"></app-footer>
  	<modelexample></modelexample>
  	 	
  </div>

</template>

<script>  

import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
import Ninja from "./components/ninja.vue"
import Modelexample from "./components/modelexample.vue"


export default {
	
	components: {	
		'app-header': Header,
		'app-footer': Footer,
		'app-ninja': Ninja,
		'modelexample': Modelexample
		},

  data () {
    return {
 
     title : 'Vue Project',
     copywrite : '@copywrite'
     user: null
    }
  }
 
}
</script>

<style>


</style>
