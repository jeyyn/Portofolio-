import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div> 
      <Navbar />
      <section id='home'><Home /></section>
      <section id='skills'><Skills/></section>
      <section id='experience'><Experience/></section>
      <section id='contact'><Contact/></section>
    </div>
  );
}

export default App;
