import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ProtectedFriend from './components/ProtectedFriend'

function App() {


  return (
    <Router>
    <Switch>
      <Route path='/friends'> <PrivateRoute component={ProtectedFriend}/> </Route> 
      <Route path='/' component={Login}/>
    </Switch>
    </Router>
  );
}

export default App;
