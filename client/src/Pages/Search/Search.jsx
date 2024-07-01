import React from "react";

import { useSelector } from "react-redux";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import { useParams } from "react-router-dom";
function Search() {
    const { searchQuery } = useParams();

    const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((e) => e.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
    ?.reverse();



  return (
    <>
      {searchQuery ? (
        <>
          <div className="container_pages">
            <LeftSidebar />
            <div className="container_pages2">
              <h2 style={{color:"white"}} className="header_searchPage">
                Search Reasults for {searchQuery}...
              </h2>
              <ShowVideoGrid vids={vids} />
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="header_searchPage">Plz Enter Something to search</h2>
        </>
      )}
    </>
  );
}

export default Search;
