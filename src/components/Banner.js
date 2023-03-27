import { Button } from '@mui/material';
import React, {useState} from 'react';
import "./banner.css";
import SearchDate from './SearchDate';

function Banner() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner_container'>
      <div className='banner_search'>
        {showSearch && <SearchDate/>}
        <Button onClick={()=>{
          setShowSearch(!showSearch)
        }}
        variant="outlined"
        className='banner_search_button'>
          {showSearch ? "Hide":"Search Dates"}
        </Button>
      </div>
      <div className='banner_info'>
        <h1> Get out and strech your imagination</h1>
        <p>Plan a different kind of getaway to uncover the hidden gems near you</p>
        <Button variant="outlined">Explore near me</Button>
      </div>
    </div>
  )
}

export default Banner