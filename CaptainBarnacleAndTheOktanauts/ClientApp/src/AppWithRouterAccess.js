﻿import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './components/Protected';

export default withRouter(class AppWithRouterAccess extends Component {
    constructor(props) {
        super(props);
        this.onAuthRequired = this.onAuthRequired.bind(this);
    }

    onAuthRequired() {
        this.props.history.push('/login');
    }

    render() {

        // Note: If your app is configured to use the Implicit Flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to add the below property to what is passed to <Security>
        //
        // pkce={false}

        //return (
		//    <Security issuer='https://{yourOktaDomain}/oauth2/default'
        //        clientId: '{clientId}'
        //        redirectUri={window.location.origin + '/login/callback'}
        //        onAuthRequired={this.onAuthRequired} >
        //        <Route path='/' exact={true} component={Home} />
        //        <SecureRoute path='/protected' component={Protected} />
        //        <Route path='/login' render={() => <Login baseUrl='https://{yourOktaDomain}' />} />
        //        <Route path='/login/callback' component={LoginCallback} />
        //    </Security>
        //);

        return (
            <Security issuer='https://{yourOktaDomain}'
                clientId= '{clientId}'
                redirectUri={window.location.origin + '/login/callback'}
                onAuthRequired={this.onAuthRequired} >
                <Route path='/' exact={true} component={Home} />
                <SecureRoute path='/protected' component={Protected} />
                <Route path='/login' render={() => <Login baseUrl='https://{yourOktaDomain}' />} />
                <Route path='/login/callback' component={LoginCallback} />
            </Security>
        );
    }
});
