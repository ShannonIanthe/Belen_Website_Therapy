import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Quote from './components/Quote'
import Services from './components/Services'

function App() {
  return (
<React.Fragment>
  <Navbar />
  <Quote />
  <About />
  <Services />
</React.Fragment>

  );
}

export default App;
