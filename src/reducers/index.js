import {ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SHOW_FAVOURITES} from "../actions/index"

const initialState={
    list:[],
    favourites:[],
    showFav:false
}

export default function movies(state=initialState, action){
    if(action.type===ADD_MOVIES){
        return {
            ...state,
            list:action.movies,
        };
    }
    if(action.type===ADD_FAVOURITES){
        return {
            ...state,
            favourites:[action.movie, ...state.favourites]
        };
    }
    if(action.type===REMOVE_FAVOURITES){
        return {
            ...state,
            favourites:state.favourites.filter((movie)=>{
                return movie!==action.movie;
            })
        };
    }
    if(action.type===SHOW_FAVOURITES){
        return {
            ...state,
            showFav:action.val
        };
    }
    return state;
}