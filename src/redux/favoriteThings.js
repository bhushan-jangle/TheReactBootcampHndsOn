function addFavoriteThings(thing){
    return{
        type : "ADDFAVORITE_THING",
        payload : thing
    }
}

function removeFavoriteThings(thing){
    return{
        type : "REMOVEFAVORITE_THING",
        payload : thing
    }
}

function favoriteThingsReducer(favoriteThing=[], action){
    switch(action.type){
        case "ADDFAVORITE_THING" :
                return [...favoriteThing, action.payload]
        case "REMOVEFAVORITE_THING" :
            const updatedArr = favoriteThing.filter(thing => thing.toLowerCase() != action.payload.toLowerCase())
            return updatedArr
        default :
            return favoriteThing
    }
}