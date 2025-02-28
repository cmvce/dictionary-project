import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function getWord(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    const key = "80oc158tb64caae306c6eb4bf7cef14f";
    const url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(url).then(getWord);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <form onSubmit={search}>
        <input
          type='search'
          autoFocus={true}
          placeholder='Search a word....'
          onChange={updateKeyword}
        />
        <button className='btn'>Search</button>
      </form>
    </div>
  );
}
