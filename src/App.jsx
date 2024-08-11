import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyab=900">
      <div className="fixed top-0 -z-10 h-full w-full">
     
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,50,150,0.5),rgba(10,10,20,0.8))]"></div>

      </div>


      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}
export default App