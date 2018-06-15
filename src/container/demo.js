import React, {Component} from 'react';

export default class Demo extends Component {

	//mount an unmount
	componentWillMount(){
		//just appear once
		console.log('component will mount to dom')
	}

	componentDidMount(){
		//after render() 
    //just appear once
		console.log('component mounted to dom')
	}

	componentWillUnmount() {
    	console.log('component will unmount from dom')
  	}


  	//update whill virtualDom diff 
  	componentWillReceiveProps(nextProps){
  		//this.setState()
  		console.log('props uptate')
  	}

  	shouleComponentUpdate(nextProps, nextState){
  		//nextProps '!=' this.props || nextState '!=' this.state
  		//return true  GO ON
  		//return faluse STOP
  	}

  	componentWillUpdate(){
  		console.log('component will update')
  	}

  	componentDidUpdate(){
  		//after render()
  		console.log('component did update')
  	}

  	render(){
  		return (
        <div>
          <h2>this is a webpack4 demo</h2>
        </div>
      )
  	}

}
