import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import HomeCard from './HomeCard'
import {Trash} from "lucide-react"
import {clearCart , removeItem} from "../utils/cartSlice"

const MyBookingsPage = () => {

  const bookingItems = useSelector((store) => store.cart.items )
 
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="pt-20 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto ">
      <div className="flex justify-between items-center mb-3 sm:mb-6 lg:mb-8">
        <h1 className="text-left text-xl sm:text-2xl lg:text-3xl font-semibold  bg-gradient-to-l from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">My Bookings</h1>
      <button
       onClick={handleClearCart}
        className="px-3 sm:px-4 py-1 rounded-lg font-semibold text-sm sm:text-base flex justify-center items-center gap-2 transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105">
     <Trash className="w-4 h-4 sm:h-5 sm:w-5 text-yellow-500"/>
            <span>Delete All</span>
            </button>
      </div>
    {bookingItems.length === 0 ? (
      <div className="mt-10 text-center ">
          <h2 className="text-2xl font-semibold text-white">No bookings yet</h2>
          <p className="text-gray-400 mt-2">Explore homes and book your perfect stay!</p>
        </div>
    ):(<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookingItems.map((item)=>(
          <HomeCard cardData={item} key={item.id} isBooked={true} onDelete={() => dispatch(removeItem(item.id))}/>
      ))}</div>)}
     </div>
  )
}

export default MyBookingsPage