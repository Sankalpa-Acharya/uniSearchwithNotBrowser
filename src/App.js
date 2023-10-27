import './App.css';
import React, { useState } from 'react'
import Movielist from './components/Movielist'
import Header from './components/Header'

function App() {

  const [movie, setMovie] = useState([]);
  const [display, setDisplay] = useState(false);
  const [college, setCollege] = useState('Nepal');

  async function getMovie() {
    const body = {
      "url":`http://universities.hipolabs.com/search?country=${college}`
    }
    const collegeData = await fetch('https://notbrowserapp-1-e9002758.deta.app/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
    const collegeList = await collegeData.json();
    const transformData = collegeList.map(college => {
      return {
        id: Math.random(),
        name: college.name,
        website: college.web_pages,
      }
    });
    setMovie(transformData);
    setDisplay(true)
  }

  const hideData = () => {
    display ? setDisplay(false) : setDisplay(true)

  }

  const inputChange= (event)=>{

    setCollege(event.target.value);
  }

  return (
    <>
    <Header></Header>
      <div className="controls">
        <input placeholder='Enter Country Name' onChange={inputChange} type="text" />
        <div className="buttons-container">
          <span onClick={getMovie} className='btn'>Fetch Colleges Data</span>
          <span onClick={hideData} className='btn'>{display ? 'Hide Data' : 'Show Data'}</span>
        </div>

      </div>

      {
        display ? <Movielist data={movie}></Movielist> : ''
      }

    </>
  );
}

export default App;
