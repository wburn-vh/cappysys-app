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
                <Route
                    exact
                    path='/login'
                    component={Auth} />
                <Redirect
                    to='/login' />
            </Switch>
        );

        if (this.props.idToken && this.props.userData) {
            let userPath = '/' + this.props.email.split(this.props.email.indexOf('@'));
            if (this.props.isAuthenticated) {
                userPath = '/' + this.props.userData.nickname;
            }

            routes = (
                <Switch>
                    <Route
                        path={userPath}
                        component={User} />
                    <Redirect
                        from='/login'
                        to={'/' + this.props.userData.nickname}
                        push={true} />
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
        userData: state.auth.userData,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, null)(App);
