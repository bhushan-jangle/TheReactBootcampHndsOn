export function changeCount(amount){
    return{
        type : "CHANGE_COUNT",
        payload : amount
    }
}

export default function countReducer(count, action){
    switch(action.type){
        case "CHANGE_COUNT" :
            return{
                count : count + action.payload
            }
        default :
            return count
    }
}