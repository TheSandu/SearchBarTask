import React from 'react';
import styled from '@emotion/styled'

const StyledInput = styled.input`
  width: 20rem;
  background: #F2F1F9;
  border: none;
  padding: 0.5rem;
`

const SearchBar = (props) => {
  return (
    <StyledInput 
     key="random1"
     value={props.input}
     placeholder={"search country"}
     onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default SearchBar