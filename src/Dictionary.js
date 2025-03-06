import React, { use, useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function getResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=80oc158tb64caae306c6eb4bf7cef14f`;
    axios.get(url).then(getResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className='Dictionary'>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type='search'
              placeholder='Search a word... '
              onChange={updateWord}
              autoFocus='true'
              className='form-control'
              defaultValue={props.defaultWord}
            />
          </form>
          <p className='suggestion'>suggested words: sunset,love,win...</p>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
