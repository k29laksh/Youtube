import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import './SearchBar.css'
import { BsMicFill } from "react-icons/bs";
import SearchList from './SearchList';


const SearchBar = () => {
  const [searchQuery, setSearchQuery]=useState("")
  const[searchListA,setSearchList]= useState(false)
  // const TitleArray=["All","React", "Music", "Trailers", "JavaScript", "News", "Live" ]
  const TitleArray=["RTK Queries tutorial","Backend Node js", "Ind vs Aus highligts", "trailers", "Backend Node js"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()))

  return (
    <div className='search_container'>
    <div className='search_container2'>
    <div className='search_div'>
      <input onChange={(e)=>setSearchQuery(e.target.value)}
               value={searchQuery}
               onClick={e=> setSearchList(true)} 
               type="text" className='search_input' placeholder='Search' />

        <IoSearchOutline className='search_icon'
         onClick={e=> setSearchList(false)} 
         />
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
