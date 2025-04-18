import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter } from 'react-router-dom'; // Route, Routes
import Navbar from './components/Layouts/Navbar';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';
import SectionFour from './components/sections/SectionFour';
import SectionFive from './components/sections/SectionFive';
import SectionSix from './components/sections/SectionSix';
import Footer from './components/Layouts/Footer';
import SectionSeven from './components/sections/SectionSeven';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <SectionSix></SectionSix>
      <SectionSeven></SectionSeven>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
