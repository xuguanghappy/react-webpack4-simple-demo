# react-webpack4-simple-demo
A simple and effective demo，include React+Redux+Webpack4+react-router4 and Ant.design

### development
npm start

### production
npm run build

#### combine reducer by auto
need creact reducer in folders inside of 'src/container' folder
get state by 'state[folder name]'

###### demo
creat **reducer.js** inside **src/container/reduxtest**
reducer.js:  **export default reducer**
get state of **src/container/reduxtest/reducer.js**
```
function mapStateToProps(state){
	//get state of folder 'reduxtest'
	const data = state.reduxtest
	return {
		number: data.number
	}
}
```

