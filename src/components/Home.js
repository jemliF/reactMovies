import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMovies } from '../store/actions/movieActions';
import MovieList from './movies/MovieList';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetchMovies()
      .then(res => {
        console.log(res);
        console.table(res);
      }, err => console.error(err));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // 
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
    /* this.propsUpdates.next(newProps) */
    if (newProps.error && newProps.error.type === 'FETCH_MOVIES') {
      alert(newProps.error.err);
    }
  }
  render() {
    /* let movies = this.props.movies; */
    return (
      <MovieList movies={this.props.movies}></MovieList>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.movieReducer.movies);
  return {
    movies: state.movieReducer.movies,
    loading: state.movieReducer.loading,
    error: state.commonReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);