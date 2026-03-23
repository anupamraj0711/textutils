import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
//import React from 'react'

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" />
    {/*<Navbar />*/}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" />
    {/*<TextForm />*/}
    <About/>
    </div>
    </>
  );
}

export default App;
