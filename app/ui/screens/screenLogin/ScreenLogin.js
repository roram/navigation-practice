import React, {Component} from 'react';
import ScreenLoginUI from './ScreenLoginUI'

export default class ScreenLogin extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    

    render(){
        return <ScreenLoginUI navigation={this.props.navigation}/>
    }
}
