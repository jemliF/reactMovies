import React from 'react'
import { MovieCard } from './MovieCard';

export default function MovieList({ movies }) {
    return (
        <div>
            <label>Hellooooooooooooooo</label>
            {movies && movies.map(movie => {
                return <MovieCard className="col-sm-4" movie={movie} />
            })
            }
        </div>
    )
}
