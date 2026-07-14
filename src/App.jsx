import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import WorkPage from "./pages/WorkPage"

function AppContent() {
  return (
    <Router basename="/Mushraf-Portfolio.io">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
