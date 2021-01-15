import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import NameList from './NameList';
import DATASET from '../dictionary.js';

const SearchPage = (props) => {

  const [input, setInput] = useState(props.match.params.name);
  const [nameListDefault, setNameListDefault] = useState();
  const [nameList, setNameList] = useState();

  const fetchData = async () => {
    setNameList(DATASET.filter(name => {
      return name.toLowerCase().includes(props.match.params.name.toLowerCase())
     }));
    setNameListDefault(DATASET);
  }

  const updateInput = async (input) => {
     const filtered = nameListDefault.filter(name => {
      return name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setNameList(filtered);
  }
  useEffect( () => {fetchData()},[]);

  return (
    <>
      <h1>List</h1>
      <SearchBar 
       input={input}
       onChange={updateInput}
      />
      <NameList nameList={nameList}/>
    </>
   );
}

export default SearchPage