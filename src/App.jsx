import Header from "./Layout/Header"
import Sidebar from "./Layout/Sidebar"
import SeriesCard from "./Components/SeriesCard"
import SidebarContextProvider from "./Context/SidebarContext"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <SidebarContextProvider>
          <div className="grid grid-cols-6 grid-rows-10 gap-4 h-screen">
            <div className="col-span-6">
              <Header></Header>
            </div>
            <div className="row-span-10">
              <Sidebar></Sidebar>
              <div className=" "> 
                <div className="bg-gray-100"></div>
              </div>
            </div>
          </div>
        </SidebarContextProvider>
      </BrowserRouter>
    
    </>    
  )
}

export default App
