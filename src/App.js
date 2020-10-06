import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminPage from './pages/AdminPage/AdminPage';
import EventsPage from './pages/EventsPage/EventsPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotMatch from './pages/NotMatch/NotMatch';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/registrationPage/:activityId">
            <RegistrationPage />
          </PrivateRoute>
          {/* <PrivateRoute path="/registrationPage">
            <RegistrationPage />
          </PrivateRoute> */}
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/eventsPage">
            <EventsPage />
          </PrivateRoute>
          <Route path="/adminPage">
            <AdminPage/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
