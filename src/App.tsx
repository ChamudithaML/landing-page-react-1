import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter } from 'react-router-dom'; // Route, Routes
import Navbar from './components/Layouts/Navbar';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </BrowserRouter>
  )
}

export default App
