import React from 'react';
import './App.css';
import SearchPage from './Components/SearchPage.js';
import { BrowserRouter, Route } from 'react-router-dom';

function App( props ) {
  return (
    <div className="App">
        <BrowserRouter>
          <Route path="/:name" component={SearchPage}>
              {/* <SearchPage /> */}
          </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;