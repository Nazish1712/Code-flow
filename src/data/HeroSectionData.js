import { BadgeCent } from "lucide-react"
import image from "../images/image1.webp"
import image1 from "../images/image2.png"
import image3 from "../images/image3.webp"

export const heroSectionImages = {
  "Find": image,
  "Book": image1,
  "Status": image3,
}

export const floatingCards = {
  "Find" : {
    bgColor : "bg-blue-500/20",
    iconColor : "text-blue-400",
    textColor : "text-blue-200",
    contentColor : "text-blue-300",
    icon : "🔍",
    title: "Find Homes",
    content: "Search and explore rental homes near your preferred location"
    },
    "Book" : {
    bgColor : "bg-purple-500/20",
    iconColor : "text-purple-400",
    textColor : "text-purple-200",
    contentColor : "text-purple-300",
    icon : "⚡️",
    title: "Book Home",
    content: "Check availability and book your ideal home in advance"
    },
    "Status" : {
    bgColor : "bg-emerald-500/20",
    iconColor : "text-emerald-400",
    textColor : "text-emerald-200",
    contentColor : "text-emerald-300",
    icon : "✅",
    title: "Check Status",
    content: "Secure your rental in seconds with a smooth booking process"
    }
}
