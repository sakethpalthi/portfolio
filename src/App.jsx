import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/Mywork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Coding from './components/Coding/Coding';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
const App = () => {
  return (
    <div>
      
      <BackgroundVideo/>
      <Navbar />
      <Hero />
      <About />
      <Coding />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
