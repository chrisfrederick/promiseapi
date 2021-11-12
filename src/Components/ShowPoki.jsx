import React from 'react'

const ShowPoki = props=>{
    return(
        <div>
            <h1>Here are the Pokemon</h1>
            <ul>
                {props.showList.map((pokemon,i)=>{
                    return <li key= {i}>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ShowPoki