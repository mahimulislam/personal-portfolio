"use client"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import Home from "./Home"
import Experience from "./Experience"
import Education from "./Education"
import Projects from "./Projects"
import Certifications from "./Certifications"
import Publications from "./Publications"
import Contact from "./Contact"
import NotFound from "./NotFound"

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          {/* Navigation */}
          <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link to="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                  Mahimul Islam
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-1">
                  {navItems.map((item) => (
                    <Button key={item.path} variant="ghost" asChild>
                      <Link to={item.path}>{item.name}</Link>
                    </Button>
                  ))}
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px]">
                    <div className="flex flex-col space-y-4 mt-8">
                      {navItems.map((item) => (
                        <Button
                          key={item.path}
                          variant="ghost"
                          className="justify-start text-lg"
                          asChild
                          onClick={() => setIsOpen(false)}
                        >
                          <Link to={item.path}>{item.name}</Link>
                        </Button>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-muted/30 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Mahimul Islam. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Index
