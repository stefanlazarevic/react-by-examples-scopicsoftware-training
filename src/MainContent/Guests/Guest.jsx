import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = (props) => {
    return (
        <li className="responded">
            <GuestName guest={ props.guest }
                       handleNameChange={ e => props.setNameAt(e.target.value) }/>
            <label>
                <input type="checkbox" checked={ props.guest.isConfirmed }
                                       onChange={ props.handleConfirmedState }/>
                Confirmed
            </label>
            <button onClick={ props.handleEditState }>
                { props.guest.isEditing ? 'Save' : 'Edit' }
            </button>
            <button onClick={ props.handleRemoveGuest }>remove</button>
        </li>
    );
};

Guest.propTypes = {
    guest: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isConfirmed: PropTypes.bool,
        isEditing: PropTypes.bool,
    }),
    handleConfirmedState: PropTypes.func.isRequired,
    handleEditState: PropTypes.func.isRequired,
};

export default Guest;
