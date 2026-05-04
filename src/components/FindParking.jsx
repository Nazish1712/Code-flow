const FindParking = () => {
    return (
        <div className="pt-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto ">
    <h2 className="text-left text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-l from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">Find your perfect spot</h2>
    <div className="flex flex-col  md:flex-row gap-3"> 
        <div className="flex-1">
            <input className="w-full px-3 sm:px-4 py-1 outline-none  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-1 focus:ring-white/40" placeholder=" 🔍 Search for location"></input>
        </div>
        <div className="flex items-center flex-wrap gap-3 md:gap-2">
            <button className="px-3 sm:px-4 py-1  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 hover:scale-105 hover:border-white/30 flex justify-center items-center gap-2 transition-all duration-200 ease-in-out">
            <Star className="w-4 h-4 sm:h-5 sm:w-5 text-yellow-500"/>
            <span>High Ratings</span>
            </button>
            <button className="px-3 sm:px-4 py-1  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 hover:scale-105 hover:border-white/30  flex justify-center items-center gap-2 transition-all duration-200 ease-in-out">
            <DollarSign className="w-4 h-4 sm:h-5 sm:w-5 text-green-500"/>
            <span>Lowest price</span>
            </button>
        </div>
    </div>
    <div>
        <ParkingCard/>
    </div> 
   </div>
    )
}