import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {getDataAction} from './reducer'

class ReduxTest extends Component {

	click=()=>{
		this.props.dispatch(getDataAction())
	}

	render(){
		return	(
			<div>
				<h1>redux test</h1>
				<Button onClick={this.click}>{this.props.number}</Button>
			</div>
		)
	}
}

function mapStateToProps(state){
	//get state of folder 'reduxtest'
	const data = state.reduxtest
	return {
		number: data.number
	}
}

export default connect(mapStateToProps)(ReduxTest);