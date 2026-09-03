import logo from "../images/logo.png"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const links = [
    { title: "Home", to: "/" },
    { title: "Explore Homes", to: "/explore-homes" },
    { title: "My Bookings", to: "/my-bookings" },
  ]

  // Subscribing to the store using selector
  const bookingItems = useSelector((store) => store.cart.items)

  return (
    <>
      {/* Main Navbar */}
      <nav className="font-jakarta fixed top-0 w-full z-40 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-1 group cursor-pointer">
              <div>
                <img src={logo} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Urban</span>
                <span className="text-blue-400">Stay</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 h-full">
              {links.map((link, index) => (
                <NavLink
                  to={link.to}
                  key={index}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative group h-full flex items-center text-sm lg:text-base tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white font-medium" : "text-white/70 hover:text-neutral-200"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.title}</span>

                      {link.title === "My Bookings" && (
                        <span className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-blue-600 to-blue-400 p-1 text-[11px] font-semibold text-white">
                          {bookingItems.length}
                        </span>
                      )}

                      <span
                        className={`absolute bottom-6 left-0 h-0.5 w-full transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100 bg-blue-400"
                            : "scale-x-0 group-hover:scale-x-100 bg-white/40"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {!mobileMenuIsOpen && (
              <button
                type="button"
                className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setMobileMenuIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="font-jakarta fixed top-0 right-0 h-full w-[70vw] max-w-sm bg-slate-900/90 backdrop-blur-lg border-l border-white/10 z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-end p-5">
                <button
                  type="button"
                  onClick={() => setMobileMenuIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white bg-slate-800/60 rounded-full cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links List */}
              <div className="flex flex-col gap-2 pt-4">
                {links.map((link, index) => (
                  <NavLink
                    to={link.to}
                    key={index}
                    end={link.to === "/"}
                    onClick={() => setMobileMenuIsOpen(false)}
                    className={({ isActive }) =>
                      `relative group flex items-center justify-between px-6 py-4 text-base tracking-wide transition-colors duration-300 ${
                        isActive ? "text-white font-medium" : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <span>{link.title}</span>
                          {link.title === "My Bookings" && (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-b from-blue-600 to-blue-400 text-xs font-semibold text-white">
                              {bookingItems.length}
                            </span>
                          )}
                        </div>

                        <span
                          className={`absolute right-0 top-0 h-full w-1 transition-all duration-300 ${
                            isActive
                              ? "bg-blue-400 opacity-100"
                              : "bg-transparent group-hover:bg-white/30 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
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