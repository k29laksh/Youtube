import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import './SearchBar.css'
import { BsMicFill } from "react-icons/bs";
import SearchList from './SearchList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const SearchBar = () => {
  const [searchQuery, setSearchQuery]=useState("")
  const[searchListA,setSearchList]= useState(false)
  // const TitleArray=["All","React", "Music", "Trailers", "JavaScript", "News", "Live" ]
  const TitleArray=useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)
  // 

  return (
    <div className='search_container'>
    <div className='search_container2'>
    <div className='search_div'>
      <input onChange={(e)=>setSearchQuery(e.target.value)}
               value={searchQuery}
               onClick={e=> setSearchList(true)} 
               type="text" className='search_input' placeholder='Search' />

      <Link to={`/search/${searchQuery}`}>
      <IoSearchOutline className='search_icon'
         onClick={e=> setSearchList(false)} 
         /></Link>
        <BsMicFill className='mic_icon'/>

        { searchQuery && searchListA&&
        <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray}/>
        }

    </div>

 
</div>
   </div>
  )
}

export default SearchBar
