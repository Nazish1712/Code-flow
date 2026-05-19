import { BadgeCent } from "lucide-react"
import image from "../images/image1.png"
import image1 from "../images/image2.png"

export const heroSectionImages = {
  "Find": image,
  "Reserve": image1,
  "Book": "https://images.unsplash.com/photo-1719941032563-75921fe474fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    "Reserve" : {
    bgColor : "bg-purple-500/20",
    iconColor : "text-purple-400",
    textColor : "text-purple-200",
    contentColor : "text-purple-300",
    icon : "⚡️",
    title: "Reserve",
    content: "Check availability and reserve your ideal home in advance"
    },
    "Book" : {
    bgColor : "bg-emerald-500/20",
    iconColor : "text-emerald-400",
    textColor : "text-emerald-200",
    contentColor : "text-emerald-300",
    icon : "✅",
    title: "Book Instantly",
    content: "Secure your rental in seconds with a smooth booking process"
    }
}
