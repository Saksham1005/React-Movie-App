import React from "react";
import { addFavourites,removeFavourites } from "../actions";

class MovieCard extends React.Component{
    constructor(){
        super();
    }

    addFavourite=()=>{
        this.props.dispatch(addFavourites(this.props.movie));
    }

    removeFavourite=()=>{
        this.props.dispatch(removeFavourites(this.props.movie));
    }

    render(){
        const {movie, isFavourite}=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                        !isFavourite
                        ?
                        <button className="favourite-btn" onClick={this.addFavourite}>Favourite</button>
                        :
                        <button className="unfavourite-btn" onClick={this.removeFavourite}>Unfavourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;