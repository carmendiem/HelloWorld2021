
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Navagation from "./pages/Navagation";
import Header from './Components/Header/Header.js';
import Veterinary from "./pages/Veterinary";
import walc from "./pages/walc";

function App() {
    return (
        <Router>
        <div className="App">
          <Header />
            <div className="Content">
                <Switch>
                    <Route exact path="/engineering">
                        <Create />
                    </Route>
                    <Route exact path="/HSSE">
                        <Create />
                    </Route>
                    <Route exact path="/Parrish">
                        <Create />
                    </Route>
                    <Route exact path="/Digital">
                        <Create />
                    </Route>
                    <Route exact path="/Veterinary">
                        <Veterinary />
                    </Route>
                    <Route exact path="/walc">
                        <walc />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    );


export default App;
