import React, { Component } from "react"
import ShouldCmpUpdt from "./ShouldCmpUpdt"

class StateCounter extends Component{
    state ={
        count:0
    }
    render(){
        console.log("This is parent Component")
        return(
            <div>
                
                <h3>This is parent Component</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>+1</button>

                {/* case -1 by passing state */}
                <ShouldCmpUpdt counter={this.state.count}/>

                {/* case -1 by not passing state */}
                {/* <ShouldCmpUpdt/> */}
            </div>
        )
    }
}

export default StateCounter