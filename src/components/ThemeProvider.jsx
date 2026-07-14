
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  const [, setIsMounted] = useState(false)

  useEffect(() => {
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark"
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme)
      }
      document.documentElement.setAttribute("data-theme", newTheme)
      return newTheme
    })
  }

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
