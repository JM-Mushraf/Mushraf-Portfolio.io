import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
