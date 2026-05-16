import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ExploreHomesPage from "./components/ExploreHomesPage"
import IndividualHomePage from "./components/IndividualHomePage"
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
      },
      {
        path:"/individual-home/:homeId",
        element: <IndividualHomePage/>
      }
    ],
    errorElement : <Error/>
  }
  
])

export default appRouter

