import React, { Component } from "react"
import CommonContext from "./CommonContext"

// class ThemeHeader extends Component{
//     static contextType = CommonContext;
//     render(){
//         console.log(this.context)
//     return(
//         <div>
//             <h3>Hello {this.context}</h3>
//         </div>
//     )}
// }

function ThemeHeader(){
        
    return(
        <CommonContext.Consumer>
            {(value)=>{
                return(
                    <div>
                        <h3>Hello {value}</h3>
                    </div>
                )
            }}
        </CommonContext.Consumer>
        
    )
}

export default ThemeHeader