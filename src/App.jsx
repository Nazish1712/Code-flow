import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ExploreHomesPage from "./components/ExploreHomesPage"
import Error from "./components/Error"
import {createBrowserRouter , Outlet} from "react-router-dom"


const AppLayout = () =>{
  

  return (
    
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
          <Navbar/>
          <Outlet/>
        </div>
        )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Hero/>
      },
      {
        path : "/explore-homes",
        element : <ExploreHomesPage/>
      }
    ],
    errorElement : <Error/>
  }
  
])

export default appRouter

