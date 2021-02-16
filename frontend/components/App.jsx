import React from 'react';
import {Redirect} from 'react-router-dom';

import HeaderNavBarContainer from './header/header_nav_bar';
import SessionLoginFormContainer from './session/session_login_form_container';
import SessionSignupFormContainer from './session/session_signup_form_container';
import SessionEmailFormContainer from './session/session_email_form_container'; 
import FooterNavBar from './footer/footer_nav_bar';

import {Route} from 'react-router-dom'; 
import {Switch} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util.jsx'; 
import {AuthRoute} from '../util/route_util.jsx';
import PageNotFound from './error/error_page';

import CreateEventForm from './create_events/create_event_form';
class App extends React.Component{
  render(){
    return (
      <div id="App" >
        <HeaderNavBarContainer /> 
        <div id="main-content">
        <Switch>
          <AuthRoute exact path="/signin" component={SessionEmailFormContainer} />
          <AuthRoute exact path="/signin/login" component={SessionLoginFormContainer} />
          <AuthRoute exact path="/signin/signup" component={SessionSignupFormContainer} />
          <Route exact path="/events/create" component={CreateEventForm} />
          <Route component={PageNotFound} />
        </Switch>
        </div>
        <FooterNavBar />
      </div>
    )
  }
}

export default App; 