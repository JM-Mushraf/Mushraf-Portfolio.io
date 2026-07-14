import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          JMM<span>.</span>
        </NavLink>
        
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end>
            Home
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Work
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
