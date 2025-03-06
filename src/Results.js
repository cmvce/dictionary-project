import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props) {
  if (props.results && props.results.meanings) {
    return (
      <div className='Results'>
        <section>
          <h2 className='word'>
            {props.results.word} - {props.results.phonetic}
          </h2>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
