import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar  />
      <Home />
      <About  />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;