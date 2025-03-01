import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  if (props.meaning.definition[0]) {
    return (
      <div className='Meaning'>
        <h3>{props.meaning.partOfSpeech}</h3>

        <p className='definition'> Definition:</p>
        <p>{props.meaning.definition}</p>
        <br />
        <p className='example'>Example:</p>
        <p>{props.meaning.example}</p>
      </div>
    );
  }
}
