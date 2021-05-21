import React,{Component} from "react"

class Toggler extends Component{
    constructor(){
        super();
        this.state={
            show:this.props.defaultVal
        }
    }

    Toggle = () =>{
        this.setState(prevState => {
            return{
                show:!prevState.show
            }
        })
    }
    render(){
        const Cmp = this.props.component
        return(
            <Cmp on={this.state.show} toggle={this.Toggle} {...props}/>
        )
    }
}

function WithToggler(component, optionObj){
    return function(props){
        return<Toggler cmp1={component} defaultVal={optionObj.defaultValue} {...props}/>
    }
   
}

export default WithToggler