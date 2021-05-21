//simple todo list app using useRef
import React,{useState,useRef} from "react"

function UseRefEx(){
    const inputRef = useRef(null);

    const[todoItem, setTodoItem] = useState("");
    const[todoList, setTodoList] = useState([]);

    function handleChange(e){
        setTodoItem(e.target.value);
    }
    function addToDo(e){
        e.preventDefault();
        console.log(todoItem);
        setTodoList(prevTodoList=>[...prevTodoList, todoItem])
        console.log(todoList);
        setTodoItem("");
        inputRef.current.focus();
    }
    const allToDos = todoList.map(item=><h4 key={item}>{item}</h4>)
    return(
        <div>
            <h3>Hello</h3>
            <form >
                <input ref={inputRef} type="text" name="todo" value={todoItem} placeholder="enter todo item" onChange={handleChange}/>
                <br></br>
                <button onClick={addToDo}>Add Todo Item</button>
            </form>
            {allToDos}
        </div>
    )
}

export default UseRefEx