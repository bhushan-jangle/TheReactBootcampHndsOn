import React, { Component } from "react"

class Toggler extends Component{
    state ={
        show:true
    }

    Toggle = () =>{
        this.setState(
            prevShow=>{
                return {show:!prevShow.show}
            }
        )
    }

    render(){
        return(
            <div>
                {this.props.render(this.state.show, this.Toggle)}
            </div>
        )
    }
}

export default Toggler 