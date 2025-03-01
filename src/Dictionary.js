import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function SearchEngine() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function getResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=80oc158tb64caae306c6eb4bf7cef14f`;
    axios.get(url).then(getResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <form onSubmit={search}>
        <input
          type='text'
          placeholder='Search a word... '
          onChange={updateWord}
          autoFocus='true'
          className='form-control w-50'
        />
      </form>
      <Results results={results} />
    </div>
  );
}
