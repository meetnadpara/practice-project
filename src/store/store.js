import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export const store = new Vuex.Store({

	state:{
	ninjas : [
      {name:'Meet',age:'25',show:false},
      {name:'parth',age:'100',show:false},
      {name:'shubham',age:'22',show:false}
      ] ,
     profile : 'engineer',
     amount : 50,
     price : 155,
     message : '',
    


	},
	getters: {
		sale : state => state.price,
		amount : state => state.amount,
		hello : state => state.message

	},
	mutations: {
		Reduceamount(state){
			state.amount = state.amount/2	
		} 
	},
	actions: {
    	Reduceamount: context => {
    		setTimeout(function(){
    			context.commit('Reduceamount')
    		},2000)
    	}

    	
  }
})
