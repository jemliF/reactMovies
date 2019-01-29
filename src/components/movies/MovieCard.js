import React from 'react'
import { NavLink } from 'react-router-dom';
export const MovieCard = (props) => {
  return (
    <div className="card mb-3">
      <label>Hellooooooooooooooo</label>
      <h3 className="card-header">{props.movie.title}</h3>
      <div className="card-body">
        <blockquote className="blockquote text-center">
          {props.movie.description}
        </blockquote>
      </div>
      <div className="card-body">
        <NavLink className="card-link text-success" to="/edit-movie">Edit</NavLink>
        <a href="#" className="card-link text-danger" >Delete</a>
      </div >
      <div className="card-footer text-muted">
        {props.movie.releaseDate}
      </div>
      <ul className="list-group list-group-flush"  >
        <li className="list-group-item active">Actors</li>
        {this.props.actors && this.props.actors.map(actor => {
          return <li className="list-group-item" >actor.firstName + " " + actor.lastName</li>
        })
        }
      </ul >
    </div >
  )
}
