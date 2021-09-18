//import logo from './logo.svg';
//import './App.css';
//import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//    Link,
//}

import React from 'react'
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;


/*function App() {

  return (
    <div className="App">
      <header className="App Header">
      <h2> Purdue Study Spaces </h2>
        <p>
          Wilmeth Active Learning Center (WALC)
          Hicks Undergraduate Library (HIKS)
          Humanities, Social
        </p>
         <Switch>
                        <Route exact path="/">
                        </Route>

                        <Route path="/WALC">
                        </Route>

                        <Route path="/HIKS">
                        </Route>

                        <Route path={"/ece"}>
                        </Route>

                        <Route path={"/ambassadors"}>
                        </Route>
                    </Switch>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
*/
