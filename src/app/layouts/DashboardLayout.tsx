import { Outlet } from "react-router-dom"

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard BeeConect 🐝</h1>
      <Outlet />
    </div>
  )
}
