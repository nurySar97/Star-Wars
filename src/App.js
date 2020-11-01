import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Opening from './components/Common/Opening';
import PlanetsContainer from './components/Planets/PlanetsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { openAppThunk } from './reducers/app-reducer';
import { AnimatePresence } from 'framer-motion'

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
          <AnimatePresence>
            <Switch>
              <Route exact path='/' render={() => <PlanetsContainer />} />
              <Route path='/profile/:id' render={() => <ProfileContainer />} />
              <Route path='/planets' render={()=><PlanetsContainer />} />
              <Route
                  key={"*"}
                  path='*'
                  render={() => <div dangerouslySetInnerHTML={{ __html: "404 NOT FOUND" }} />}
                />
            </Switch>
          </AnimatePresence>
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
