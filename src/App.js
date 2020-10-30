import { Route, Switch } from 'react-router-dom';
import './App.css';
import PlanetsContainer from './components/Planets/PlanetsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path='/' render={()=><PlanetsContainer />} />
          <Route path='/profile/:id' render={()=><ProfileContainer />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
