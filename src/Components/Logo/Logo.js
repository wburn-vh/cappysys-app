import React from 'react';

import './Logo.scss';

function Logo(props) {
    let errorMessage = null;

    switch (props.isError) {
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'Wrong e-mail';
            break;
        case 'INVALID_PASSWORD':
            errorMessage = 'Wrong password';
            break;
        case 'USER_DISABLED':
            errorMessage = 'User was blocked';
            break;
        default:
            break;
    }

    // return (
    //     <div className='Logo'>
    //         <img
    //             src={require('../../img/capybara.png')}
    //             alt='CappySys Logo'
    //             className={props.isError ? 'Logo-capybara-hide' : ''} />
    //         <div className={props.isError ? 'Logo__message Logo-text-show' : 'Logo__message'}>
    //             <p>{errorMessage}</p>
    //         </div>
    //     </div>
    // )

    return(
        <div className="Logo">
            <img
                src={require('../../img/cap-icon.png')}
                alt="Capybara logo" />
            {
                props.isError ? 
                    <div className="Logo__error-container">
                        <p>{errorMessage}</p>
                    </div> : null
            }
            
        </div>
    )
}

export default Logo;