import { Outlet } from "react-router-dom"
import AnimatedBackground from "@/shared/components/AnimatedBackground"
import Navbar from "@/shared/components/Navbar"

export function PublicLayout() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 px-4 py-20">
        <Outlet />
      </main>
    </div>
  )
}
