import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import {data} from "../data";
import MovieCard from "./MovieCard"; 
import {addMovies, showFavourites} from "../actions/index";
// import { StoreContext } from "../index";

class App extends React.Component {
  
  componentDidMount(){
// First dispatch method is called for dispatching action 
// Then subscribe method is called 
// Then console.log('State', store.getState());  

      // const {store}=this.props;
      // store.subscribe(()=>{
      //   console.log('Updated');
      //   this.forceUpdate();
        //You should not use this function.
      // })
      // make an API call to fetch the data
      // dispatch action

      this.props.dispatch(addMovies(data));
      // console.log('State', store.getState());
  }

  isFavourite=(movie)=>{
    const {movies}=this.props;
    const {favourites}=movies;
    const index=favourites.indexOf(movie);
    if(index!== -1){
      return true;
    }
    return false;
  }

  onChangeTab=(val)=>{
    this.props.dispatch(showFavourites(val));
  }

  render(){
    const {movies}=this.props;
    
    console.log(movies);

    let {list,favourites,showFav}=movies;
    
    console.log('APP component Rendered');
    
    const displayMovies=showFav?favourites:list;
    
    return (
        <div className="App">
          <Navbar/>
          <div className="main">
            <div className="tabs">
              <div 
              className={`tab ${showFav ? '':'active-tabs'}`} 
              onClick={()=>this.onChangeTab(false)}>
                Movies
              </div>
              <div 
              className={`tab ${showFav ? 'active-tabs':''}`} 
              onClick={()=>this.onChangeTab(true)}>
                Favourites
              </div>
            </div>

            <div className="list">
                {displayMovies.map( (movie,index) =>{
                  return <MovieCard
                  movie={movie}
                  key={`Movie-${index}`}
                  dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//           {(store)=><App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state){
    return {
      movies:state.movies,
      search:state.search
    };
}

const connectedComponent=connect(mapStateToProps)(App);

export default connectedComponent;
