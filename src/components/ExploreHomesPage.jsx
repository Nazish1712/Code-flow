import HomeCard from "./HomeCard.jsx"
import {Star, DollarSign , ArrowRight , House} from "lucide-react"
import {useState , useEffect} from "react"
import Shimmer from "./Shimmer.jsx"


const ExploreHomesPage =() => {
    const [listOfHomes, setListOfHomes] = useState([])

    const [filteredHomes, setFilteredHomes] = useState([])

    const [searchText , setSearchText] = useState("")
    
     useEffect(()=>{
        fetchData()
     },[])

     const fetchData = async () => {
        const response = await fetch("https://raw.githubusercontent.com/Nazish1712/UrbanStay-house-listings-api/main/urbanHouseListing.json")
        
        const data = await response.json()

        setListOfHomes(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.homes)

        setFilteredHomes(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.homes)
     }

   return(
    listOfHomes.length === 0 ?  (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-45 px-6">
    {Array(6).fill("").map((_, index) => (
       <Shimmer key={index}/>
    ))}
 </div>
) :
   (
   <div className="pt-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto ">
    <h2 className="text-left text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-5 bg-gradient-to-l from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">Find your perfect spot</h2>
    <div className="flex flex-col"> 
        <div className="flex gap-3 mb-3 sm:mb-4">
            <input className="w-full px-3 sm:px-4 py-1 outline-none  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-1 focus:ring-white/40" placeholder=" 🔍 Search for location" value={searchText} onChange={(e)=>(setSearchText(e.target.value))}></input>
            <button className="flex justify-center items-center group px-3 sm:px-4 py-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 gap-2 "
            onClick={()=>{const searchHomes = listOfHomes.filter((home)=> (home.info.name.toLowerCase().includes(searchText.toLowerCase())))
                setFilteredHomes(searchHomes)
            }}>
                <span>Search</span>
                <ArrowRight className="w-4 h-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
        </div>
        <div className="flex items-center flex-wrap gap-3 mb-4">
            <button className="px-3 sm:px-4 py-1  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 hover:scale-102 hover:border-white/30 flex justify-center items-center gap-2 transition-all duration-300 ease-in-out" onClick={()=> {const highRatingList = listOfHomes.filter((home) => home.info.rating > 4.5)
                setFilteredHomes(highRatingList)
            }}>
            <Star className="w-4 h-4 sm:h-5 sm:w-5 text-yellow-500"/>
            <span>High Ratings</span>
            </button>
            <button className="px-3 sm:px-4 py-1  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 hover:scale-102 hover:border-white/30  flex justify-center items-center gap-2 transition-all duration-300 ease-in-out" onClick={()=>{
                const lowPriceList = listOfHomes.filter((home)=> home.info.pricePerDay < 1500)
                 setFilteredHomes(lowPriceList)}}>
            <DollarSign className="w-4 h-4 sm:h-5 sm:w-5 text-green-500"/>
            <span>Lowest price</span>
            </button>
            <button className="px-3 sm:px-4 py-1  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 hover:scale-102 hover:border-white/30  flex justify-center items-center gap-2 transition-all duration-300 ease-in-out" onClick={()=>{
                setFilteredHomes(listOfHomes)
                setSearchText("")}}>
            <House className="w-4 h-4 sm:h-5 sm:w-5 text-blue-500"/>
            <span>All Homes</span>
            </button>
        </div>
    </div>
    {filteredHomes.length === 0 ? 
    (<div className="mt-10 text-center ">
        <h2 className="text-2xl font-semibold text-white">No homes found</h2>
        <p className="test-gray-400 mt-2">Try another search</p>
    </div>)
    :
    (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredHomes.map((card)=> (
        <HomeCard key={card.info.id} cardData={card.info}/>))}
    </div> )
    }
 </div>
   ))
}

export default ExploreHomesPage