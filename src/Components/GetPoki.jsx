import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import axios from 'axios';

const GetPoki = props=>{
const [poki, setPoki] = useState([])

useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=807")
    .then(response=>{
    setPoki(response.data.results)
    console.log(response.data.results)

    })
    .catch(error=>{console.log("err",error)})
  },[])

const onClickHandler = (e)=>{
    e.preventDefault()
    props.onClickPoki(poki)
}

return(
    <div>
        <h1>Pokemon API</h1>
        <button onClick={onClickHandler} type="button">Fetch Pokemon</button>
    </div>
)

}

export default GetPoki