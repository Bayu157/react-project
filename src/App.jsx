
import Navbar from "./Layout/Navbar"
import Sidebar from "./Layout/Sidebar"
import SidebarContextProvider from "./Context/SidebarContext"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <SidebarContextProvider>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
        </SidebarContextProvider>
      </BrowserRouter>
    </>    
  )
}

export default App
