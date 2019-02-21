import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Auth.scss';
import Logo from '../../Components/Logo/Logo';
import * as actions from '../../store/actions/authActions';

class Auth extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        if (localStorage.getItem('idToken')) {
            this.props.autoAuth(
                localStorage.getItem('idToken'),
                localStorage.getItem('userId')
            )
        }
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="Auth">
                <Logo isError={this.props.error} />
                <form onSubmit={this.submitHandler}>
                    <input type='email' placeholder='e-mail' onChange={this.emailHandler} required autoComplete='true' />
                    <input type='password' placeholder='password' onChange={this.passwordHandler} required autoComplete='true' />
                    <button>sign in</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        autoAuth: (idToken, userId) => dispatch(actions.autoAuth(idToken, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
