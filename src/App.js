
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Errorpage from './components/Errorpage/Errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamDetail from './components/TeamDetail/TeamDetail';
function App() {
  return (
    <div>
    <Router>
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetail></TeamDetail>
          </Route>
          <Route path="*">
            <Errorpage></Errorpage>
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
