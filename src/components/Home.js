import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMovies } from '../store/actions/movieActions';
import MovieList from './movies/MovieList';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchMovies();
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
    /* this.propsUpdates.next(newProps) */
  }
  render() {
    /* let movies = this.props.movies; */
    return (
      <div className="row" >
        <MovieList movies={this.props.movies}></MovieList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: state.movies
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