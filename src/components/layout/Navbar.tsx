"use client"

import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X, Download, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  const links = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Publications", path: "/publications" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement("a")
    link.href = "/resume/Mahimul_Islam_Resume.pdf"
    link.download = "Mahimul_Islam_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur shadow-elegant border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Mahimul Islam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              onClick={handleResumeDownload}
              className="gradient-primary shadow-elegant hover:shadow-lg transition-all duration-200 group"
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 nav-blur border-b border-border/50">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10 rounded-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-border/20">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  setIsOpen(false)
                }}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button
                onClick={() => {
                  handleResumeDownload()
                  setIsOpen(false)
                }}
                className="gradient-primary shadow-elegant flex-1 ml-4"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
