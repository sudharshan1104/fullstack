import './App.css'
import ClassCompEg from './components/ClassComponents/ClassCompEg';
import About from './components/FunctionalComponent/About';
import Home from './components/FunctionalComponent/Home';
import Gallery from './components/FunctionalComponent/Gallery';
import Contact from './components/FunctionalComponent/Contact';
import NavBar from './components/FunctionalComponent/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <ClassCompEg/>
    </div>
  )
}

export default App
