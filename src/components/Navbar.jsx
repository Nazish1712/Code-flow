import logo from "../images/logo.png"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false)

  const links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Explore Homes",
      to: "/explore-homes",
    },
    {
      title: "My Bookings",
      to: "/my-bookings",
    },
  ]
  
  //subscribing to the store using selector
  const bookingItems = useSelector((store) => store.cart.items)

  return (
    <> 
      {/* 1. Main Navbar (z-40 so the menu can cover it) */}
      <nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm font-jakarta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-1 group cursor-pointer">
              <div>
                <img src={logo} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 " />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Urban</span>
                <span className="text-blue-400">Stay</span>
              </span>
            </Link>

            {/** Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {links.map((link, index) => (
                <Link
                  to={link.to}
                  key={index}
                  className="relative group text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  {link.title}{" "}
                  {link.title === "My Bookings" && (
                    <span className="absolute -top-2 -right-4 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-blue-600 to-blue-400 p-1 text-xs font-semibold text-gray-300 group-hover:text-white">
                      {bookingItems.length}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* 2. Hamburger button always stays as Menu in the main nav */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setmobileMenuIsOpen(true)}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setmobileMenuIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="font-jakarta fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-slate-900 border-l border-slate-800 z-50 md:hidden flex flex-col shadow-2xl"
            >
             
              <div className="flex justify-end p-4 sm:p-6">
                <button
                  onClick={() => setmobileMenuIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white bg-slate-800/50 rounded-full"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 px-6 pt-4">
                {links.map((link, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.1, 
                    }}
                    key={index}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setmobileMenuIsOpen(false)}
                      className="relative flex items-center text-gray-300 hover:text-white text-lg font-medium"
                    >
                      {link.title}
                      {link.title === "My Bookings" && (
                        <span className="ml-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-b from-blue-600 to-blue-400 text-xs font-semibold text-white">
                          {bookingItems.length}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </> 
  )
}

export default Navbar
