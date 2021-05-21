function setYoutubeVideoTitle(title){
    return{
        type : "SET_YOUTUBEVIDEO_TITLE",
        payload : title
    }
}

function upVotesVideo(){
    return{
        type: "UP_VOTES"
    }
}

function downVotesVideo(){
    return{
        type: "DOWN_VOTES"
    }
}

const initialState ={
    title:"",
        votes:{
            up:0,
            down:0
        }
}

function youTubeVideoReducer(youTubeVideo=initialState, action){
    switch(action.type){
        case "SET_YOUTUBEVIDEO_TITLE" :
            return{
                    ...youTubeVideo,
                    title: action.payload
                }
        case "UP_VOTES" :
            return{
                    ...youTubeVideo,
                    votes:{
                        ...state.youTubeVideo.votes,
                        up: state.youTubeVideo.votes.up + 1
                    }
                }
        case "DOWN_VOTES" :
            return{
                    ...youTubeVideo,
                    votes:{
                        ...youTubeVideo.votes,
                        down:youTubeVideo.votes.down - 1
                    }
                }
        default :
            return youTubeVideo
    }
}