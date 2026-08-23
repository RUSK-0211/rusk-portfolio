import { useState, useEffect, useRef } from "react"
import type { View } from "@/types"
import Header from "@/components/Header/"
import HomeView from "@/pages/Home"
import ProjectsView from "@/pages/Projects"

const ROLE = "Frontend Developer / Project Manager"

export default function App() {
  const [view, setView] = useState<View>("home")
  const [typedText, setTypedText] = useState("")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let i = 0
    setTypedText("")
    function type() {
      if (i <= ROLE.length) {
        setTypedText(ROLE.slice(0, i))
        i++
        timerRef.current = setTimeout(type, 45)
      }
    }
    type()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  function nav(v: View, scrollId?: string) {
    setView(v)
    window.scrollTo({ top: 0, behavior: "auto" })
    if (scrollId) {
      setTimeout(() => {
        document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 30)
    }
  }

  return (
    <>
      <Header view={view} nav={nav} />
      {view === "home" ? (
        <HomeView typedText={typedText} nav={nav} />
      ) : (
        <ProjectsView nav={nav} />
      )}
    </>
  )
}
