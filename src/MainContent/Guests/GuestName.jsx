import React from 'react';
import PropTypes from 'prop-types';

const GuestName = (props) => {
    if (props.guest.isEditing) {
        return (
            <input type="text"
                   placeholder="Guest name"
                   defaultValue={ props.guest.name }
                   onChange={ props.handleNameChange } />
        );
    } else {
        return <span>{ props.guest.name }</span>
    }
}

GuestName.propTypes = {
    guest: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isEditing: PropTypes.bool
    }),
};

export default GuestName;
