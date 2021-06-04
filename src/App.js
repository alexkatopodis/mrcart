import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';



function App() {
  return (    

    <>
    <Header />
    <div className="App-content">       
      <Content /> 

      <Footer />        
      
      
    </div>
    </>
    
  );
}

export default App;



