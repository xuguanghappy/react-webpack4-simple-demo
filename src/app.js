import React from 'react'
import { Route,Switch } from 'react-router-dom'
import ReduxTest from './container/reduxtest/index.js'
import Demo from './container/demo.js'

export default class App extends React.Component{
	render(){
		return (
			<div style={{marginTop: 60}}>
				<Switch>
					<Route path='/' component={Demo}></Route>
					<Route path='/reduxtest' component={ReduxTest}></Route>
				</Switch>	
			   
			</div>
		)
	}
}

