import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './Containers/Auth/Auth';
import User from './Containers/User/User';
// import Page404 from './Containers/Page404/Page404';
import './App.scss';

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route exact path='/login' component={Auth} />
                <Redirect to='/login' />
            </Switch>
        );

        if (this.props.idToken) {
            routes = (
                <Switch>
                    <Route path='/user' component={User} />
                    <Redirect from='/login' to='/user' />
                </Switch>
            )
        }

        return (
            <Router>
                <Fragment>
                    {routes}
                </Fragment>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idToken: state.auth.idToken,
        userData: state.auth.userData
    }
}

export default connect(mapStateToProps, null)(App);
