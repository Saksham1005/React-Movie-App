import { combineReducers } from "redux";

import {ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES,
    SHOW_FAVOURITES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT} from "../actions/index"

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
    if(action.type===ADD_MOVIE_TO_LIST){
        return {
            ...state,
            list: [action.movie, ...state.list],
        };
    }

    return state;
}

const initial_search_state={
    result:{},
    showSearchResults: false
}

export function search(state=initial_search_state,action){
    console.log("Search Reducer");
    if(action.type===ADD_MOVIE_TO_LIST){
        return {
            ...state,
            showSearchResults:false
        }
    }

    if(action.type===ADD_SEARCH_RESULT){
        return {
            ...state,
            results: action.movie,
            showSearchResults: true,
        }
    }
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

// Redux provides us with combineReducers  which is equivalent of root_reducer

export default combineReducers({
    movies,
    search
});