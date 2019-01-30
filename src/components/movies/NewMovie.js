import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchActors } from '../../store/actions/actorActions';
import { createMovie } from '../../store/actions/movieActions';
class NewMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMovie: {
                title: '',
                releaseDate: new Date(),
                description: '',
                actors: []
            },
            actors: []
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.props.fetchActors();
    }
    handleChange = (event) => {
        this.setState({...this.state, newMovie: {...this.state.newMovie, [event.target.id]: event.target.value} });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMovie(this.state.newMovie);
        this.props.history.push('/')
    }
    render() {
        const formStyle = {
            margin: '10px'
        }
        const cursorStyle = {
            cursor: 'pointer'
        }
        const linkStyle = {
            marginLeft: '200px'
        }
        return (
            <form className="row" style={formStyle}>
                <div className="col-sm-6">
                    <div>
                        <label className="form-control-label" htmlFor="title">Title</label>
                        <input className="form-control" id="title" name="title" type="text" required minLength="4" onChange={this.handleChange} value={this.state.newMovie.title} />
                        <div>
                            <div className="text-danger">Title is required!</div>
                            <div className="text-danger">Title must be at least 4 characters long.</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="release-date">Release Date</label>
                        <input className="form-control" id="releaseDate" name="releaseDate" type="date" onChange={this.handleChange} value={this.state.newMovie.releaseDate} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" name="description" rows="3" minLength="10" onChange={this.handleChange} value={this.state.newMovie.description}>
                        </textarea>
                        <div >
                            <div className="text-danger">Description is required!</div>
                            <div className="text-danger">Description must be at least 10 characters long.</div>
                        </div>
                    </div>
                    <label>Actors</label>
                    <ul className="list-group">
                        {
                            this.props.actors && this.props.actors.map(actor => {
                                return <li className="list-group-item d-flex justify-content-between align-items-center">
                                    {actor.firstName + '' + actor.lastName}
                                    <span className="badge badge-pill badge-primary" style={cursorStyle}>Remove</span>
                                </li>
                            })
                        }
                    </ul>
                    <button className="btn btn-outline-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                    <button className="btn btn-outline-default btn-block">Reset</button>
                </div>
                <div className="col-sm-6">
                    <label>All actors list
                    <NavLink style={linkStyle} to="/new-actor">Create new actor</NavLink>
                    </label>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="badge badge-pill badge-primary" style={cursorStyle}>Add</span>
                        </li>
                    </ul>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        actors: state.actors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActors: () => {
            dispatch(fetchActors());
        },
        createMovie: (movie) => {
            dispatch(createMovie(movie));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);