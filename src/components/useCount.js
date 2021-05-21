import {useState} from "react"

function useCount(){
    const[count, setCount] = useState(0);

    function Increment(){
        setCount(prevCount=>prevCount+1)
    }

    //if we return obect then our custom hook use is static , 
    //we should have to used same as return obj
    //for ex - return{count, Increment}
    //declaration - const[count, Increment] = useCounter();

    //but if we return array then our custom hook declaraton work like a actual hook, 
    //no need to use same as return obj
     //for ex- return[count, Increment]
     //declaration - const[value, setValue] = useCounter(); value, setValue is varible

    return[count, Increment]
}

export default useCount