import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './Components/AllRoutes'
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar'
import './App.css'
const App = () => {
  const [LeftSidebarBtn, setLeftSidebarBtn] = useState({
    display: "none",
  });

  const wdtToggle = () => {
    console.log(LeftSidebarBtn)
    if (LeftSidebarBtn.display === "none")
      setLeftSidebarBtn({
        display: "flex",
      });
    else
      setLeftSidebarBtn({
        display: "none",
      });
  };
  return (
    <Router>
      <Navbar
                  wdtToggle={wdtToggle}
/>
       <DrawerSidebar wdtToggle={wdtToggle} LeftSidebarBtn={LeftSidebarBtn}/>
      <AllRoutes/>
    </Router>
  )
}

export default App
