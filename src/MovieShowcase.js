import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => {
      return <MovieCard {...movie} />
    })

    // let movies = movieData.map(movie => {
    //  return <MovieCard movie={movie} />
    // })
    // return movies.map(item => {
    //   <li>{item}</li>
    // })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
