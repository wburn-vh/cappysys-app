import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import UserView from '../UserView/UserView';
import InitProfile from '../InitProfile/InitProfile';
import AdminView from '../AdminView/AdminView';
import './User.scss';

class User extends Component {
    render() {
        let user = null;

        if (this.props.userData.isFirstEnter) {
            user = <InitProfile />
        } else if (!this.props.userData.isFirstEnter && !this.props.userData.isAdmin) {
            user = <UserView />
        } else {
            user = <AdminView />
        }

        return (
            <Fragment>
                {user}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
