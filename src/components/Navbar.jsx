import logo from "../images/logo.png"
import { Menu  , X} from "lucide-react"
import {useState} from "react"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
const Navbar = () => {

const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false)

const links = [
    {
        title: "Home",
        to: "/"
    },
    {
        title: "Explore Homes",
        to: "/explore-homes"
    },
    {
        title: "My Bookings",
        to: "/my-bookings"
    },
]
   //subscribing to the store using selector
   const bookingItems = useSelector((store) => store.cart.items)   

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
               <Link to="/" className="flex items-center space-x-1 group cursor-pointer">
               <div>
                <img src={logo} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 "/>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Urban</span>
                <span className="text-blue-400">Stay</span>
                </span>
                </Link> 
               
                {/** Nav Links */}
               <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                 {links.map((link, index) => (
                    <Link to={link.to} key={index} className="relative group text-gray-300 hover:text-white text-sm lg:text-base">{link.title} {link.title === "My Bookings" && (<span className="absolute -top-2 -right-4 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-blue-600 to-blue-400 p-1 text-xs font-semibold text-gray-300 group-hover:text-white">
                    {bookingItems.length}
                    </span>)}</Link>
                 ))}
               </div>

               <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setmobileMenuIsOpen((prev)=> !prev)}>
                {mobileMenuIsOpen ?(<X className="w-5 h-5 sm:w-6 sm:h-6"/>) :
                  (<Menu className="w-5 h-5 sm:w-6 sm:h-6"/>)
                }
               </button>
            </div>
           </div>
           {mobileMenuIsOpen && 
           <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {links.map((link, index) => (
                    <Link to={link.to} key={index} className="relative group block text-gray-300 hover:text-white text-sm lg:text-base" onClick={() => setmobileMenuIsOpen(false)}>{link.title}{link.title === "My Bookings" && (<span className="absolute -top-1 left-21 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-blue-600 to-blue-400 p-0.5 text-[11px] font-semibold text-gray-300 group-hover:text-white ">
                        {bookingItems.length}
                        </span>)}</Link>
                 ))} 
            </div>
            </div>}
        </nav>
    )
}

export default Navbar