import { BadgeCent } from "lucide-react"

export const codeExamples = {
    "App.jsx" :
`import logo from "../images/logo.png"
import { Menu  , X} from "lucide-react"
import {useState} from "react"
    
const Navbar = () => {
const [mobile, setmobile] = useState(false)
const links = [
    {title: "Features",
     href: "#features"},
    {title: "Pricing",
     href: "#pricing"},
    ]
    `,
    "Main.jsx" : 
`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const Navbar = () => {
const [mobile, setmobile] = useState(false)
    `,
    "Navbar.jsx" : 
`import {ChevronDown} from "lucide-react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
    const Hero = () => {
    return (
        <section className="relative min-h-screen flex">
            <div className="absolute top-20 left-4 "></div>
            <div className="absolute bottom-20 righ"></div>
            createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
    `
}

export const floatingCards = {
  "App.jsx" : {
    bgColor : "bg-blue-500/20",
    iconColor : "text-blue-400",
    textColor : "text-blue-200",
    contentColor : "text-blue-300",
    icon : "AI",
    title : "Smart Completion",
    content : "AI-powered code suggestions in real-time"
    },
    "Main.jsx" : {
    bgColor : "bg-purple-500/20",
    iconColor : "text-purple-400",
    textColor : "text-purple-200",
    contentColor : "text-purple-300",
    icon : "⚡️",
    title : "Auto Animation",
    content : "Dynamic typing effects generated automatically"
    },
    "Navbar.jsx" : {
    bgColor : "bg-emerald-500/20",
    iconColor : "text-emerald-400",
    textColor : "text-emerald-200",
    contentColor : "text-emerald-300",
    icon : "🔍",
    title : "Smart Search",
    content : "Intelligent code search across your project"
    }
}
