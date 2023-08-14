import './App.css';
import React from "react"
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    < >
    <Main>
      <Navbar />
      <Routes>
<Route exact path='/home' element= {<Home/>}/>
<Route exact path='/about' element= {<About/>}/>
<Route exact path='/contact' element= {<Contact/>}/>
<Route  path='/*' element= {<Error/>}/>


      </Routes>
    </Main>
      
    </>

  )
}



export default App;
