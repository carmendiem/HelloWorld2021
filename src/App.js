import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Navagation from "./pages/Navagation";
import Header from './Components/Header/Header.js';

function App() {
    return (
        <Router>
        <div className="App">
          <Header />
            <div className="Content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/engineering">
                        <Create />
                    </Route>
                    <Route exact path="/walc">
                        <walc />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    );
}


export default App;
