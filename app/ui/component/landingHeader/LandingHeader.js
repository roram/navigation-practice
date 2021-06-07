import React, {Component} from 'react';
import LandingHeaderUI from './LandingHeaderUI';

export default class LandingHeader extends Component{
    constructor(props){
        super(props)    
    }

    componentDidMount= () =>{
        console.log(this.props.titleHeader)
    }

    openDrawer = () =>{
        this.props.navigation.openDrawer();
    }

    render(){
        return(
            <LandingHeaderUI 
            handler1={this.openDrawer}
            titleHeader={this.props.titleHeader}
            />
        );
    }
}