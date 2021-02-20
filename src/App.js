import React, { useState, useEffect } from "react";
import axios from 'axios';
// import "./App.css";
import styled from 'styled-components';
import Photo from '../src/components/Photo';
import Description from '../src/components/Description';
import Header from '../src/components/Header';
import Button from '../src/components/Button';


const WrapperDiv = styled.div`
  font-family: 'Quattrocento Sans', sans-serif;
  text-align: center;
  color: ${(pr) => pr.theme.white};
  background-color: ${(pr) => pr.theme.primaryColor};
  width: 100%;
  height: 100%;
  padding: 4%;
   `;

const TitleStyle = styled.h1`
  font-size: 3em;
  padding: 4% 0;
  text-align: center;
  width: 100%;
`;

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 'DEMO_KEY';
const date = '2020-12-08';


function App() {
  const [nasaData, setNasaData] = useState([]);
  
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
    <WrapperDiv>
      <TitleStyle>Nasa Image of the Day</TitleStyle>
       <Header photoTitle={nasaData.title}/>
       <div>
       {nasaData && <Photo photoURL={nasaData.url}/>}
       </div>
       <div>
       <Description explanation={nasaData.explanation}/>
       <Button/>
       </div>
    </WrapperDiv>
  )
}

export default App;
