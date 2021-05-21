import React,{useState} from "react"
import useCount from "./useCount"

function CounterApp(){
    //adding below commentted code in custom hook - useCount
    // const[count, setCount] = useState(0);

    // function Increment(){
    //     setCount(prevCount=>prevCount+1)
    // }

    //used our custom hook
    const[value, setValue] = useCount();

    return(
        <div>
            <h3>The count is : {value}</h3>
            <button onClick={setValue}>Add 1</button>
        </div>
    )
}

export default CounterApp