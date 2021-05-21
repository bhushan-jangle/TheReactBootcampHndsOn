// import redux, {createStore} from "redux"
//for using react thunk 
//if we used useSelector and useDispatch and not used react thunk then useSelector and useDispatch can't 
//wait for frtching initial data from API because React Hook is very fast that react redux connect 
//good way to use react thunk with useSelector and useDispatch

import redux, {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

//if not using react-thunk
// export function increment(){
//     return{
//         type:"INCREMENT"
//     }
// }

//if using react-thunk
// export function increment() {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch({type: "INCREMENT"})
//         }, 1500)
//     }
// }

export function increment(){
    return(dispatch, getState)=>{
        const number = getState()
        const baseUrl = "https://swapi.co/api/people"
        fetch(`${baseUrl}/${number}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: "INCREMENT",
                    payload: res
                })
            })
    }
}

export function decrement(){
    return{
        type:"DECREMENT"
    }
}

export function reducer(count=0, action){
    switch(action.type){
        case "INCREMENT" :
            return count+1
        case "DECREMENT" :
            return count-1
        default :
            return count
    }
}

//if not using thunk
// const store = createStore(reducer)

//if using thunk need pass it to store
const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

export default store
