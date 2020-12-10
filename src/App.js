import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Photo from '../src/components/Photo';
import Description from '../src/components/Description';
import Header from '../src/components/Header';


const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 'DEMO_KEY';
const date = '2020-12-08';

function App() {
  const [nasaData, setNasaData] = useState([]);
  // const [photo, setPhoto] = useState([]);
  

  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then((res) => {
        setNasaData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);


  return (
    <div className="App">
      <h1>Nasa Image of the Day</h1>
       <Header photoTitle={nasaData.title}/>
       {nasaData && <Photo photoURL={nasaData.url}/>}
       <Description explanation={nasaData.explanation}/>
    </div>
  )
}

export default App;
