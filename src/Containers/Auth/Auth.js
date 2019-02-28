import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Auth.scss';
import Logo from '../../Components/Logo/Logo';
import * as authActions from '../../store/actions/authActions';

class Auth extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        if (localStorage.getItem('idToken') && localStorage.getItem('userId')) {
            this.props.autoAuth(
                localStorage.getItem('idToken'), localStorage.getItem('userId')
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
                    <div className="Auth__input">
                        <input 
                            type='email'
                            onChange={this.emailHandler}
                            required
                            autoComplete='on' />
                        <span className='Auth__bar'></span>
                        {
                            this.state.email === '' ? 
                                <label>e-mail</label> : 
                                <label style={{top: '-1rem', fontSize: '1.2rem'}}>e-mail</label>
                        }
                    </div>
                    <div className="Auth__input">
                        <input 
                            type='password'
                            onChange={this.passwordHandler}
                            required
                            autoComplete='on' />
                        <span className='Auth__bar' />
                        {
                            this.state.password === '' ? 
                                <label>password</label> : 
                                <label style={{top: '-1rem', fontSize: '1.2rem'}}>password</label>
                        }
                    </div>
                    <button>sign in</button>
                    <div className="Auth__btn-bg" />
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
        onAuth: (email, password) => dispatch(authActions.auth(email, password)),
        autoAuth: (idToken, userId) => dispatch(authActions.autoAuth(idToken, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
