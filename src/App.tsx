import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "@/app/layouts/PublicLayout"
import { DashboardLayout } from "@/app/layouts/DashboardLayout"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import DashboardHome from "@/pages/DashboardHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Zona publică */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Zona dashboard (autentificare + superadmin) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
