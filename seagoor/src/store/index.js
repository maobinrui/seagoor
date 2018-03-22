
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

var CHANGE_TITLE = "changeTitleMutation";

import axios from "axios";

const store = new Vuex.Store({


	state:{
		shoppingdata:null
	},


	getters:{
		// store 中进行 切割， 这样每个组件就可以直接用切割后的状态了。
		/*getcomingsoonlist(state){
			return state.comingsoon?state.comingsoon.data.films:[]
		},

		getTotalPage(state){
			return state.comingsoon?state.comingsoon.data.page.total:0
		}*/
	},

	actions:{

	},

	mutations:{
		//唯一能改变状态的地方,只能同步操作
		/*[CHANGE_TITLE](state,payload){
			state.title = payload
			// console.log(payload);
		},
		changeTileMutation2(){

		},*/

		shoppingMutation(state,payload){
			state.shoppingdata=payload;
			console.log(state.shoppingdata);
		}
	}

})

// window.kerwin = "dwadwa";

export default store;


var name = "kerwin";

var obj = {
	[name]:"xiaoming"
}

// {
// 	a:{

// 	},
// 	b:{

// 	}
// }