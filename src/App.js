
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Veterinary from "./pages/Veterinary";
import Walc from "./pages/Walc";

function App() {
    return (
        <Router>
        <div className="App">
          <Header />
            <div className="Content">
                <Switch>
                    <Route exact path="/engineering">
                        <Veterinary />
                    </Route>
                    <Route exact path="/HSSE">
                        <Veterinary />
                    </Route>
                    <Route exact path="/Parrish">
                        <Veterinary />
                    </Route>
                    <Route exact path="/Digital">
                        <Veterinary />
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


export default App;
