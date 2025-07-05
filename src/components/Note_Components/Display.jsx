import React from 'react'
import {useState} from 'react'

const Display=({value})=>{
    console.log("D");
  
    return(

<div className="add-note-container">
    {value}
</div>

    );
}

export default Display;