import {MapPin , ArrowRight , Star} from "lucide-react"
import parkingImage from "../images/my-project.jpeg" 

const CarCard = (props) => {
  const {} = props;
    return(
       <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-lg hover:ring-white/20 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:ring-1">
        <div className="h-40 w-full overflow-hidden relative">
            <img src={parkingImage} alt="parking-image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></img>
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg">
              <Star className="w-3.5 h-3.5 text-yellow-400"/>
              <span className="text-white text-xs font-medium">4.5</span>
            </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
             <h3 className="text-white font-semibold text-base sm:text-lg ">City Mall Parking</h3>
             <span className="text-blue-400 text-base sm:text-lg">$40/hr</span>
          </div>
          <div className="flex gap-2 items-center">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/60"/>
          <span className="text-sm sm:text-base text-white/60 ">Jaipur, Rajasthan</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <button className="flex justify-center items-center group px-3 sm:px-4 py-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 gap-2">
            <span>Book</span>
            <ArrowRight className="w-4 h-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"/>
          </button>
        </div>
       </div>
    )
}

export default CarCard 