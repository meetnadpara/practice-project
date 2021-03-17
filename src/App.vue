<template>
  <div>
  	<app-header v-bind:title="title" ></app-header>
  	<app-ninja v-bind:ninjas="ninjas"></app-ninja>
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
 	ninjas : [
      {name:'Meet',age:'25',show:false},
      {name:'parth',age:'28',show:false},
      {name:'shubham',age:'22',show:false}
     ],
     title : 'Vue Project',
     copywrite : '@copywrite'
       
    }
  }
}
</script>

<style>


</style>
