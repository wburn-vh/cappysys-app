import React, { Component } from 'react';

import './InitProfile.scss';

class InitProfile extends Component {
    render() {
        return (
            <div className="InitProfile">
                <h2 className="InitProfile__text">Provide us some more info about you, please.</h2>
                <form>
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='surname' />
                    <input type="date" placeholder='birthday' />
                    <input type="text" placeholder='address' />
                    <input type="text" placeholder='phone number' />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default InitProfile;