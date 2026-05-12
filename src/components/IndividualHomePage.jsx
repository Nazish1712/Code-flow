import image from "../images/my-project.jpeg"
import {MapPin, Star, Users, BedDouble, Bath, Waves} from "lucide-react"

const IndividualHomePage = () => {
    return(
        <div className="pt-20 px-5 sm:px-6 lg:px-10 max-w-4xl mx-auto flex flex-col gap-4">
        <div className="overflow-hidden rounded-3xl ">
            <img src={image} alt="home-image" className="w-full h-[250px]"></img>
        </div> 
        <div className="flex justify-center items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"/>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"/>
                           </div>
        <div className="flex flex-col gap-3">
            <h3 className="flex gap-1.5 items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/60"/>
                <span className="text-sm sm:text-base text-white/60">Vaishali Nagar, Jaipur</span>
            </h3>
            <h2 className="text-white text-center font-semibold text-lg sm:text-xl">Palm Residency</h2>
            <div className="max-w-2xs sm:max-w-3xs  mx-auto border flex justify-center items-center gap-1.5 px-2 py-1 rounded-2xl bg-white/5 backdrop-blur-sm  border-white/10 hover:bg-white/10">
                <div className="flex items-center gap-1 ">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"/>
                <span className="text-sm sm:text-base text-white">4.8</span>
              </div>
              <div className="h-0.5 w-0.5 sm:h-1 sm:w-1 bg-white rounded-full"></div>
              <div className="text-sm sm:text-base text-white/60">120 reviews</div>
            </div>
            </div>
        <p className="text-sm sm:text-base text-white/60 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt aperiam, obcaecati ea alias earum voluptatum, sapiente saepe porro, assumenda ipsam! Eos sequi consequatur suscipit debitis vel enim expedita totam.
        </p>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent">
        </div>
        <div className="flex flex-col gap-3 items-center">
            <h3 className="text-sm sm:text-base font-semibold ">HIGHLIGHTS</h3>
            <div className="grid grid-cols-2 gap-x-30 gap-y-10">
                <div>
                    <div>
                    <Users/>
                    </div>
                    <span>8 guests</span>
                </div>
                <div>
                    <div>
                    <BedDouble/>
                    </div>
                    <span>8 guests</span>
                </div>
                <div>
                    <div>
                    <Bath/>
                    </div>
                    <span>8 guests</span>
                </div>
                <div>
                    <div>
                    <Waves/>
                    </div>
                    <span>8 guests</span>
                </div>

            </div>
        </div>
        <div className="flex">
            <div>
                ₹4500/day
            </div>
            <button>Book</button>
        </div>
    </div>
    )
}

export default IndividualHomePage