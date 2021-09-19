
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Digital from './pages/Digital';
import Engineering from './pages/Engineering';
import HSSE from './pages/HSSE';
import Parrish from './pages/Parrish';
import Veterinary from "./pages/Veterinary";
import Walc from "./pages/Walc";
import Header from './Components/Header/Header.js';


function App() {
    return (
        <Router>
        <div className="App">
          <Header />
            <div className="Content">
                <Switch>
                    <Route exact path="/engineering">

                        <Engineering />
                    </Route>
                    <Route exact path="/HSSE">
                        <HSSE />
                    </Route>
                    <Route exact path="/Parrish">
                        <Parrish />
                    </Route>
                    <Route exact path="/Digital">
                        <Digital />

                    </Route>
                    <Route exact path="/Veterinary">
                        <Veterinary />
                    </Route>
                    <Route exact path="/Walc">
                        <Walc />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    );
}

export default App;
