import React, {useState, useEffect} from "react";
import "./App.css";
import jsonp from 'jsonp';
import shuffle from 'lodash.shuffle';

import ReactAudioPlayer from 'react-audio-player';
import Card from "./components/card";
import {BilingualOptions} from './components/options';

const pics = require("./foods");


const App = props => {

  const [gameOn, setGameOn] = useState(false);
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('Food');
  const [randomizedPix, setRandomized] = useState([]);
  const [callOrder, setCallOrder] = useState([]);
  let [called, setCalled] = useState(0);
  let [srcMp3, setSrcMp3] = useState('');
  let [srcOgg, setSrcOgg] = useState('');
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);

  const callNextWord = () => {
    console.log('nxt')
    const apiKey = 'a1947295bd2a7535393c3c3df3d666b0';
    const currentWord = callOrder[called].name;

        jsonp(`https://apifree.forvo.com/action/word-pronunciations/format/json/word/${currentWord}/id_lang_speak/39/order/date-desc/limit/5/key/${apiKey}`, null, (err, data)=> {
      const mp3Src = data.items[0].pathmp3;
      const oggSrc = data.items[0].pathogg;
      setSrcMp3(mp3Src);
      setSrcOgg(oggSrc);

    });
      
  }

  const validate = (e) => {
    const answer = callOrder[called].id;
    const chosen = e.target.id;
    console.log(answer, chosen)

    if(answer === chosen){
      setCorrect([...correct, answer]);
    } else {
      setWrong([...wrong, chosen]);
    }
      setCalled(called + 1);

    if(called <= 24){
      callNextWord();
    }
  }


  if(gameOn){
    
    return (
      <div id='gameBoard'>
        <div>STATS PLACEHOLDER</div>
        <Card 
        id='bingoCard' 
        order={randomizedPix} 
        correct={correct} 
        wrong={wrong} 
        validate={validate}/>
        <div>
           <ReactAudioPlayer autoPlay src={srcOgg}/>
        </div>
      </div>
    )
  }
  
    return (
      <div className='App'>
        <button 
          type='button' 
          className='btn btn-success' 
          onClick={(e)=> {
            setGameOn(true);
            setRandomized(shuffle(pics));
            setCallOrder(shuffle(pics));
          }}>
            Start
        </button>
        <BilingualOptions 
        language={language} 
        category={category} changeLang={setLanguage} changeCat={setCategory}/>
      </div>
    );

  }

export default App;
