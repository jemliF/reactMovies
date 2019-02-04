import React from 'react'
import { MovieCard } from './MovieCard';

export default function MovieList({ movies }) {
    return (
        <div className="row">
            {movies && movies.map(movie => {
                return <MovieCard key={movie._id} className="col-sm-4" movie={movie} />
            })
            }
        </div>
    )
}
