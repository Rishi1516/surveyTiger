import './App.css';
import logo from './logo.png';
import { Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TakeSurvey from './components/take-survey';
import CreateSurvey from './components/create-survey';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{border:"1px solid black"}}>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/">
            <Link to="/create">
                <Button className="survey-main-btn">Create Survey</Button>
            </Link>
              <Link to="/take">
                <Button className="survey-main-btn">Take Survey</Button>
            </Link>
          </Route>
          <Route path="/create">
            <CreateSurvey />
          </Route>
          <Route path="/take">
            <TakeSurvey />  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
