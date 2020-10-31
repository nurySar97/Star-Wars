import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Opening from './components/Common/Opening';
import PlanetsContainer from './components/Planets/PlanetsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { openAppThunk } from './reducers/app-reducer';

class App extends React.Component {
  componentDidMount() {
    this.props.openAppThunk(false)
  }
  render() {
    if (this.props.isOpen) {
      return <Opening />
    }
    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <PlanetsContainer />} />
            <Route path='/profile/:id' render={() => <ProfileContainer />} />
          </Switch>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isOpen: state.appData.isOpen
  }
}


export default connect(mapStateToProps, { openAppThunk })(App);
