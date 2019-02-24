import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './Containers/Auth/Auth';
import User from './Containers/User/User';
import Page404 from './Containers/Page404/Page404';
import './App.scss';

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route
                    exact
                    path='/login'
                    component={Auth} />
                <Redirect
                    to='/login' />
                <Route 
                    component={Page404} />
            </Switch>
        );

        if (this.props.idToken && this.props.userData) {
            let userPath = this.props.userData.nickname
            
            if (this.props.userData.isFirstEnter) {
                userPath = this.props.userData.email.slice(0, this.props.userData.email.indexOf('@'))
            }

            routes = (
                <Switch>
                    <Route 
                        exact
                        path={'/' + userPath}
                        component={User} />
                    <Redirect 
                        exact
                        from='/login'
                        to={'/' + userPath} />
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
        userData: state.user.userData
    }
}

export default connect(mapStateToProps, null)(App);
