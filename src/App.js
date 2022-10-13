import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Quote from './components/Quote'

function App() {
  return (
<React.Fragment>
  <Navbar />
  <Quote />
  <About />
</React.Fragment>

  );
}

export default App;
