import React, {Component} from 'react';
import ScreenSecondStackUI from './ScreenSecondStackUI';
import NavigatorConstant from '../../../src/navigation/NavigatorConstant';

export default class ScreenSecondStack extends Component{

    constructor(props){
        super(props)
    }

    pushDetail = () =>{
        this.props.navigation.push(NavigatorConstant.SECOND_STACK.DETAIL_SECOND_SCREEN)
    }

    render(){
        return(
            <ScreenSecondStackUI handler1={this.pushDetail}/>
        );
    }
}