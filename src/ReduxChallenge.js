import store from "./redux/reduxChallenge/index"
import {userReducer, setUserFirstName} from "./redux/reduxChallenge/user"

store.dispatch(setUserFirstName("Bhushan"))