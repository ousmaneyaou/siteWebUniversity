import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programmes from './components/Programmes/Programmes';
import Titre from './components/Titre/Titre';
import Temoignages from './components/Temoignages/Temoignages';
import Universite from './components/Universites/Universite';
import Contact from './components/Contacts/Contact';
import Footer from './components/footer/Footer';
import Videos from './components/Videos/Videos';
import { useState } from 'react';

function App() {

const [playstate, setPlaystate] = useState(false)


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Titre sousTitre='Ce que nous offrons' titre='Notre programme'/>
        <Programmes />
        <About setPlaystate={setPlaystate}/>
        <Titre sousTitre='Gallery' titre='Campus photo'/>
        <Universite />
        <Titre sousTitre='Témoignages' titre="ce que dit l'étudiant"/>
        <Temoignages />
        <Titre sousTitre='Contactez-Nous' titre="Prendre contact"/>
        <Contact />
        <Footer />
      </div>
      <Videos playstate={playstate} setPlaystate={setPlaystate}/>
    </div>
  );
}

export default App;
