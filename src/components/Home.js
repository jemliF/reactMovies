import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMovies } from '../store/actions/movieActions';
import MovieList from './movies/MovieList';
class Home extends Component {
  componentWillMount(){
    console.log('componentWillMount');
    this.props.fetchMovies();
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.props.fetchMovies();
  }
  render() {
    let movies = this.props.movies;
    return (
      <div className="row" >
        <MovieList movies={this.props.movies}></MovieList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (name) => {
      dispatch(fetchMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);