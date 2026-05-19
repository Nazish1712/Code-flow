import { useEffect, useState} from "react"
import {INDIVIDUAL_HOME_API} from "../utils/constants.js"

const useHomeInfo = (homeId) => {
    const [homeInfo, setHomeInfo] = useState(null)

    useEffect(()=>{
       fetchHomes()
    },[])

    const fetchHomes = async () => {
            const response = await fetch(INDIVIDUAL_HOME_API)
            const data = await response.json()
            
            const allHomes = data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.homes
    
            if(allHomes){
                const specificHome = allHomes.find((home) => String(home.info.id) === String(homeId))
    
                setHomeInfo(specificHome)
            }
        }
    
    return homeInfo
}

export default useHomeInfo