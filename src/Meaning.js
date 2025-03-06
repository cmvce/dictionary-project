import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  if (props.meaning.definition[0]) {
    return (
      <div className='Meaning'>
        <section>
          <h3>{props.meaning.partOfSpeech}</h3>

          <p className='definition '>{props.meaning.definition}</p>
          <br />

          <p className='example'>{props.meaning.example}</p>

          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    );
  }
}
