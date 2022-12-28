import React from 'react'

export default function Movie(props) {
  return (
  <div className='movie-div'>
      <p className='movie'>{props.college.name}</p>
      <p className='date'>{props.college.website}</p>
  </div>
  )
}
