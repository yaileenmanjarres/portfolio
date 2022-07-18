import './App.css'
import { Header } from '../components/Header/Header'
import { Home } from '../components/Home/Home'
import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'
import { Qualification } from '../components/Qualification/Qualification'
import { Services } from '../components/Services/Services'
import { Portfolio } from '../components/Portfolio/Portfolio'
import { Project } from '../components/Project/Project'
import { Testimonial } from '../components/Testimonial/Testimonial'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'

function App() {
  function ScrollTop() {
    return (
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    )
  }
  return (
    <>

      <Header />
      <main classNameName='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Project />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
