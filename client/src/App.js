import React, {useState} from "react";
import "./App.css";

import Card from "./components/card";
import {BilingualOptions} from './components/options';

const App = props => {

  const [gameOn, setGameOn] = useState(false);
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('Food');

  if(gameOn){
    return <Card />
  }
  
    return (
      <div className='App'>
        <button 
          type='button' 
          className='btn btn-success' 
          onClick={(e)=> setGameOn(true)}>
            Start
        </button>
        <BilingualOptions language={language} category={category} changeLang={setLanguage} changeCat={setCategory}/>
      </div>
    );

  }

export default App;
