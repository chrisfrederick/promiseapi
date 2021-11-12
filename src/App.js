import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import axios from 'axios';
import ShowPoki from './Components/ShowPoki';
import GetPoki from './Components/GetPoki';

function App() {

  const [data, setData] = useState([])
  const addData = (data) =>{
    setData(data)
    console.log(data)
  }

  

  return (
    <div className="App">
      <header className="App-header">
        

        <GetPoki onClickPoki={addData}></GetPoki>
        <ShowPoki showList={data}></ShowPoki>
        
      </header>
    </div>
  );
}

export default App;
