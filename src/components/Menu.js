//toggling using state
import React, { Component } from "react"

class Menu extends Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }

    Toggler(){
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.Toggler()}}>{this.state.show ? "Hide" : "Show"}menu</button>
                <nav style={{display:this.state.show?"block":"none"}}>
                    <h3>Header</h3>
                    <p>paragraph</p>
                </nav>
            </div>
        )
    }
}

export default Menu