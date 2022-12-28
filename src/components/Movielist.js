import React from 'react'
import Movie from './Movie'

export default function Movielist(props) {
  return (
    <div className='moviecontainer'>
{
        props.data.map(college=>{
                console.log(college)
            return <Movie key={college.id} college={college}></Movie>
        })

    }
</div>
  )
}
