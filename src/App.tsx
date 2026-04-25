import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Sobre from './components/Sobre/Sobre'
import Funcionalidades from './components/Funcionalidades/Funcionalidades'
import Equipe from './components/Equipe/Equipe'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'

function App() {
  return(
    <>
    <Navbar />
    <Hero />
    <Sobre />
    <Funcionalidades />
    <Equipe />
    <Contato />
    <Footer />
    </>
  )
}

export default App