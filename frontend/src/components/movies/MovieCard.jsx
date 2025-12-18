import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='w-40 md:w-52 cursor-pointer'>
        <img src={movie.img} alt={movie.title} className='rounded-lg shadow-md' />
        <p>{movie.title}</p>
        <p>{movie.rating} | {movie.votes}</p>
        <p>{movie.age}</p>
        <p>{movie.languages}</p>
    </div>
  )
}

export default MovieCard