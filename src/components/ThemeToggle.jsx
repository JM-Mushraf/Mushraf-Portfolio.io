
import { useTheme } from "./ThemeProvider"
import "./ThemeToggle.css"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle
