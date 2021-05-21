import React,{useState , useEffect, useRef} from "react"
import useSpeedGame from "./useSpeedGame"

{/* 
        * Challenge: build the basic structure of our game
        * 
        * 1. <h1> title at the top
        * 2. <textarea> for the box to type in 
        *      (tip: React normalizes <textarea /> to be more like <input />, 
        *      so it can be used as a self-closing element and uses the `value` property
        *      to set its contents)
        * 3. <h4> ti display the amount of time remaining
        * 4. <button> to start the game
        * 5. Another <h1> to display the word count
          </h1> */}

          {/* /**
          * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
          * To verify it's working, you could just console.log the state on every change
          * 
          * https://scrimba.com/p/p7P5Hd/cW8Jdfy
            */}

                    /**
         * Challenge:
         * 
         * 1. Create state to hold the current value of the countdown timer.
         *    Display this time in the "Time Remaining" header
         */

                            /**
         * Challenge:
         * 
         * 1. Create state to hold the current value of the countdown timer.
         *    Display this time in the "Time Remaining" header
         * 
         * 2. Set up an effect that runs every time the `timeRemaining` changes
         *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
         * 
         *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
         *    a lot of extra work.
         * 
         *    Warning: there will be a bug in this, but we'll tackle that next
         */

                                    /**
         * Challenge:
         * 
         * When the timer reaches 0, count the number of words the user typed in 
         * and display it in the "Word count" section
         * 
         *  * After the game ends, make it so the user can click the Start button again
        * to play a second time
        */
        
function SpeedGame(){
    const
    {
        inputRef,
        text,
        handleChange,
        isGameStart,
        timeRemaining,
        startGame,
        count
    } = useSpeedGame(15);
    
    return(
        <div>
            <h1>How fast do you type?</h1>
            <textarea ref={inputRef} value={text} id="" cols="80" rows="20" onChange={handleChange} disabled={!isGameStart}/>
            <h4>Time Remaining : {timeRemaining}</h4>
            <button disabled={isGameStart} onClick={startGame}>START</button>
            <h1>Total Word Count : {count}</h1>
        </div>
    )
}

export default SpeedGame