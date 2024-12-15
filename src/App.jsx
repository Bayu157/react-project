
import Navbar from "./Layout/Navbar"
import Sidebar from "./Layout/Sidebar"
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}></Navbar>
      <Sidebar sidebarToggle={sidebarToggle}></Sidebar>
    </>
  )
}

export default App
