import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function photo(response) {
    setPhotos(response.data.photos);
  }
  function getResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(); // eslint-disable-next-line
  }

  function search() {
    const url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=80oc158tb64caae306c6eb4bf7cef14f`;
    axios.get(url).then(getResponse);

    const imgurl = `https://api.shecodes.io/images/v1/search?query=${word}&key=80oc158tb64caae306c6eb4bf7cef14f`;
    axios.get(imgurl).then(photo);
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
          <h1>What is your word of the day?</h1>
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
          <p className='suggestion'>suggested words: food, love, music...</p>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
