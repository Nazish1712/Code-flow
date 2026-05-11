import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ExploreHomesPage from "./components/ExploreHomesPage"
import {createBrowserRouter} from "react-router-dom"


const AppLayout = () =>{
  

  return (
    
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
          <Navbar/>
          <Hero/>
        </div>
        )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>
  },
  {
    path : "/explore-homes",
    element : <ExploreHomesPage/>
  }
])

export default appRouter

