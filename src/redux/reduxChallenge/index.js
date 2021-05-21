const redux = require("redux")
const{combineReducers, createStore} = redux

import {userReducer, setUserDetails, removeUserDetails} from "./user"

const rootReducer = combineReducers({
    user:userReducer
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(setUserDetails({
    firstName: "Joe",
    lastName: "Schmoe",
    id: 1,
    email: "joe@schmoe.com"
}))

store.dispatch(setUserDetails({
    email: "bob@dbc.com"
}))

store.dispatch(removeUserDetails())
export default store