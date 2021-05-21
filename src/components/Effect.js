import React,{useState, useEffect} from "react"
import randomcolor from "randomcolor"

//useEffect call when state is chnage
function Effect(){
    const[count, setCount]=useState(0);
    const[color, setColor]=useState("red");

    //same as componentDidMount() - []
    //same as componentWillUnmount()= - using clearInterval

    useEffect(() => {
        const intervalId = setInterval(() => {
            // setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    
    //same as componentDidUpdate() - [count]
    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return(
        <div>
            <h4 style={{color:color}}>{count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Effect