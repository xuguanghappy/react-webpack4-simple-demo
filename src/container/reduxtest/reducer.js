//action define
let GET_DATA = 'getData';

//creat action
export function getDataAction(){
	return dispatch=>{
		getTestData().then(
			res=>{
				dispatch({
					type: GET_DATA,
					payload: res
				})
			}
		)
	}
}

//inite state
const initeState = {
	number: 0,
	name: 'xuguang',
	age: '30'
}

//reducer  function name must be 'reducer', and must be export default
function reducer(state=initeState,action){
	switch(action.type){
		case GET_DATA:
			return {...state, number:state.number+1, ...action.payload};
		default:
			return state
	}
}

// fetch data
function getTestData(){
	return fetch('./../../assets/data/testdata.json').then(res=>{
		return res.json()
	}).then(res=>{
		return res
	})
}

export default reducer 
	 

