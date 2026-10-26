import { useState } from "react"
import type { View } from "@/types"
import Header from "@/components/Header/"
import HomeView from "@/pages/Home"
import ProjectsView from "@/pages/Projects"

export default function App() {
  const [view, setView] = useState<View>("home")

  function nav(v: View, scrollId?: string) {
    setView(v)

    window.scrollTo({
      top: 0,
      behavior: "auto",
    })

    if (scrollId) {
      setTimeout(() => {
        document.getElementById(scrollId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 30)
    }
  }

  return (
    <>
      <Header view={view} nav={nav} />

        <main>
          {view === "home" ? (
            <HomeView nav={nav} />
          ) : (
          <ProjectsView nav={nav} />
          )}
        </main>
    </>
  )
}
