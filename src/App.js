import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programmes from './components/Programmes/Programmes';
import Titre from './components/Titre/Titre';
import Temoignages from './components/Temoignages/Temoignages';
import Universite from './components/Universites/Universite';
import Contact from './components/Contacts/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Titre sousTitre='Ce que nous offrons' titre='Notre programme'/>
        <Programmes />
        <About />
        <Titre sousTitre='Gallery' titre='Campus photo'/>
        <Universite />
        <Titre sousTitre='Témoignages' titre="ce que dit l'étudiant"/>
        <Temoignages />
        <Titre sousTitre='Contactez-Nous' titre="Prendre contact"/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
