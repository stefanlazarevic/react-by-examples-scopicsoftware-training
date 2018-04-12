import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = (props) => {
    return (
        <form onSubmit={ props.handleFormSubmit }>
            <input type="text"
                value={ props.inputValue }
                placeholder="Invite new guest"
                onChange={ props.handleInputChange }/>
            <button type="submit" name="submit" value="submit">{ props.submitButtonText }</button>
        </form>
    );
};

GuestInputForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    submitButtonText: PropTypes.string,
};

GuestInputForm.defaultProps = {
    submitButtonText: 'Submit',
};

export default GuestInputForm;
