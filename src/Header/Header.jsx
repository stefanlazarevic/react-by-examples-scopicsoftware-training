import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <p>{ props.subtitle }</p>
            <GuestInputForm handleFormSubmit={ props.handleFormSubmit }
                            handleInputChange={ props.handleInputChange }
                            inputValue={ props.inviteFormInputValue }/>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

Header.defaultProps = {
    title: 'RSVP',
    subtitle: 'A Treehouse App',
};

export default Header;
