
import Navbar from "./Layout/Navbar"
import Sidebar from "./Layout/Sidebar"
import SidebarContextProvider from "./Context/SidebarContext"

function App() {

  return (
    <>
      <SidebarContextProvider>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </SidebarContextProvider>
    </>    
  )
}

export default App
