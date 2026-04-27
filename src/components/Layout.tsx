import { Navigation } from "./Navigation"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <footer className="px-6 py-12 border-t border-light-slate dark:border-dark-slate flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="fira-label text-mid-gray">
          © 2026 AWINTER
        </div>
        <div className="flex gap-6">
          {/* Add social links here if needed */}
        </div>
      </footer>
    </div>
  )
}
