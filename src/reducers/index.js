import { combineReducers } from "redux";

import {ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SHOW_FAVOURITES} from "../actions/index"

const initial_movie_State={
    list:[],
    favourites:[],
    showFav:false
}

export function movies(state=initial_movie_State, action){
    console.log("Movies Reducer");
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

const initial_search_state={
    result:{}
}

export function search(state=initial_search_state,action){
    console.log("Search Reducer");
    return state;
}

const initial_root_state={
    movies:initial_movie_State,
    search:initial_search_state
};

// export default function root_reducer(state=initial_root_state, action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     };
// }

export default combineReducers({
    movies,
    search
});