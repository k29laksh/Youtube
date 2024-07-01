import React from "react";
import "./SearchList.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchList = ({ TitleArray,setSearchQuery }) => {
  return (
    <>
      <div className="Container_SearchList">
        {TitleArray.map((item, index) => (
          <p id={index} 
          onClick={e=>setSearchQuery(item)} className="title_item">
            <IoSearchOutline size={19} className="search_list_icon" />
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default SearchList;
