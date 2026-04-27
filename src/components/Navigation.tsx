import { Link, useLocation } from "react-router-dom"
import { TechLabel } from "./ui/design-system"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "Tools", path: "/tools" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
]

export function Navigation() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-6 flex justify-between items-center bg-[#121212] border-b border-[#334155]">
      <Link to="/" className="font-sans font-bold text-2xl tracking-tighter text-white">
        AWINTER<span className="text-bright-blue">.</span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link key={item.path} to={item.path} className="group flex flex-col items-center">
              <TechLabel 
                active={isActive} 
                className={cn(
                  "transition-colors group-hover:text-bright-blue",
                  !isActive && "text-[#f8f9fa]"
                )}
              >
                {item.name}
              </TechLabel>
              {isActive && (
                <div className="w-1 h-1 bg-bright-blue rounded-full mt-1 animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          )
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-white" aria-label="Open Menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:max-w-none bg-white dark:bg-charcoal border-border p-0 flex flex-col"
          >
            <SheetHeader className="px-6 py-8 border-b border-light-slate/20 dark:border-dark-slate/20">
              <SheetTitle className="text-left font-sans font-bold text-2xl tracking-tighter">
                AWINTER<span className="text-bright-blue">.</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-10 mt-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    className={cn(
                      "font-sans text-2xl font-bold transition-colors",
                      isActive ? "text-bright-blue" : "text-black dark:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
