import React from 'react'
import {useSelector} from "react-redux"
import HomeCard from './HomeCard'

const MyBookingsPage = () => {

  const bookingItems = useSelector((store) => store.cart.items )

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <HomeCard cardData={bookingItems}/>
       </div>
       </div>
  )
}

export default MyBookingsPage