import React, { Component, useState } from "react"

//[Introduction]
//[lesson -1 -setting-the-stage-with-modern-javascript-features]
//way-1 
//using arrow function by code step by step
class NewJsFeature1 extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
                <button onClick={()=>{this.setState({count:this.state.count-1})}}>-</button>
            </div>
        )
    }
}

//way-2 
//using simple function
//need to bind in constructor
//normal function doesnot know its parent
//no need to bind for a arrow function

class NewJsFeature2 extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }

        //binding function with parent
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }
    Increment (){
        this.setState({
            count:this.state.count+1
        })
    }
    Decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.Increment}>+</button>
                <button onClick={this.Decrement}>-</button>
            </div>
        )
    }
}

//way-3 
//using prevState param in setState method arrow function by scrimba
class NewJsFeature3 extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    Increment = ()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }
    Decrement = () =>{
        this.setState(prevState =>{
            return{
                count:prevState.count -1
            }
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.Increment}>+</button>
                <button onClick={this.Decrement}>-</button>
            </div>
        )
    }
}

//way-4 try to use simple and arrow function in functional component
//we cannot use state in functional component need to use useState from hooks
//normal function can work here no need to arrow function
function NewJsFeature(){
    const[count, setCount] = useState(0);
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    return(
        <div>
            <h3>{count}</h3>
            {/* both way is correct */}
            <button onClick={()=>Increment()}>+</button> 
            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default NewJsFeature