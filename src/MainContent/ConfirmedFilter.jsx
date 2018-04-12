import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = (props) => {
    return (
        <label>
            <input type="checkbox" checked={ props.hideUnconfirmed }
                                    onChange={ props.toggleHideUnconfirmed }/>
            Hide those who haven't responded
        </label>
    );
}

ConfirmedFilter.propTypes = {
    hideUnconfirmed: PropTypes.bool,
    toggleHideUnconfirmed: PropTypes.func.isRequired,
};

export default ConfirmedFilter;
