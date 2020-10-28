import React, { Component, useState, useEffect } from 'react'
import Header from './Container/Header/Header'
import Nav from './Container/Nav/Nav'
import './App.css'
import Results from './Container/Results/Results';
import request from './Container/Request/Request';

function App() {

  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
    return (
      <div className="app">
        <Header/>
        <Nav setSelectedOption={setSelectedOption}/>
        <Results selectedOption={selectedOption}/>
      </div>
    )
}

export default App
