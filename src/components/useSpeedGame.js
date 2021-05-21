import {useState,useRef,useEffect} from "react"

function useSpeedGame(speedTiming=10){

    const[text, setText] = useState("");
    const[timeRemaining, setTimeRemaining] = useState(speedTiming);
    const[isGameStart, setIsGameStart] = useState(false);
    const[count, setCount] = useState(0);
    const inputRef = useRef(null);
    //useeffect for decrease count timer
        // useEffect(()=>{
        //     console.log("useEffect -1 ")
        //     if(isGameStart)
        //          setIsGameStart(false)
        // },[])

    useEffect(()=>{
        if(isGameStart && timeRemaining>0)
        {
            setTimeout(()=>{
                setTimeRemaining(timeRemaining-1)
            },1000)
        }
        else if(timeRemaining===0 && text!==" "){
            endGame();
        }
    },[timeRemaining,isGameStart])

    function handleChange(e){
        setText(e.target.value)
        // countWord(text);
    }

    function CountNoOfWords(text){
        const wordsArr = text.trim().split(" ");
        // const WCount = wordsArr.length;
        return wordsArr.filter(word => word !== "").length
    }

    function startGame(){
        setCount(0);
        setTimeRemaining(speedTiming)
        setIsGameStart(true);
        setText("");
        inputRef.current.disabled=false;
        inputRef.current.focus();
    }

    function endGame(){ 
        setIsGameStart(false);
        setCount(CountNoOfWords(text));
    }

    return{inputRef,text,handleChange,isGameStart,timeRemaining,startGame,count}
}

export default useSpeedGame