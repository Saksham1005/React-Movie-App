import React from "react";

import Navbar from "./Navbar";
import {data} from "../data";
import MovieCard from "./MovieCard"; 
import {addMovies, showFavourites} from "../actions/index";

class App extends React.Component {
  
  componentDidMount(){
// First dispatch method is called for dispatching action 
// Then subscribe method is called 
// Then console.log('State', store.getState());  

      const {store}=this.props;
      store.subscribe(()=>{
        console.log('Updated');
        this.forceUpdate();//You should not use this function.
      })
      // make an API call to fetch the data
      // dispatch action

      store.dispatch(addMovies(data));
      console.log('State', store.getState());
  }

  isFavourite=(movie)=>{
    const {favourites}=this.props.store.getState();

    const index=favourites.indexOf(movie);
    if(index!== -1){
      return true;
    }
    return false;
  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(showFavourites(val));
  }

  render(){
    const {store}=this.props;
    
    console.log(store.getState());

    let {list,favourites,showFav}=store.getState();
    
    console.log('APP component Rendered');
    
    const displayMovies=showFav?favourites:list;
    
    return (
        <div className="App">
          <Navbar/>
          <div className="main">
            <div className="tabs">
              <div className={`tab ${showFav ? '':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${showFav ? 'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
            </div>

            <div className="list">
                {displayMovies.map( (movie,index) =>{
                  return <MovieCard
                  movie={movie}
                  key={`Movie-${index}`}
                  dispatch={store.dispatch}
                  isFavourite={this.isFavourite(movie)}
                  />
                })}
            </div>
            
            {displayMovies.length===0?<div className="no-movies">No Movies to Display!</div>:null}
          </div>
        </div>
      );
  }
}

export default App;
