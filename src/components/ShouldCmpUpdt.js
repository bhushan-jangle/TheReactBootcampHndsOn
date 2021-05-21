import React, { Component } from "react"

//without should component update
// class ShouldCmpUpdt extends Component{
//     render(){
//     return(
//         <div>
//             <h3>This is a child component</h3>
//         </div>
//     )}
// }

//with should component update
class ShouldCmpUpdt extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.Count === this.props.Count)
        {
            return false
        }
        return true
    }
    render(){
        console.log("This is child Component")
    return(
        <div>
            
            <h3>This is a child component</h3>
        </div>
    )}
}

export default ShouldCmpUpdt