import React, {useState} from "react";
import "./App.css";
import jsonp from 'jsonp';

import Card from "./components/card";
import {BilingualOptions} from './components/options';

const App = props => {

  const [gameOn, setGameOn] = useState(false);
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('Food');

  const apiKey = 'a1947295bd2a7535393c3c3df3d666b0';

  if(gameOn){
    jsonp(`https://apifree.forvo.com/action/word-pronunciations/format/json/word/apple/id_lang_speak/39/order/date-desc/limit/5/key/${apiKey}`, null, (err, data)=> {
      console.log(data.items)
    })
    
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
        <BilingualOptions 
        language={language} 
        category={category} changeLang={setLanguage} changeCat={setCategory}/>
      </div>
    );

  }

export default App;
