import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './Guests/GuestList';

class MainContent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            hideUnconfirmed: false,
        };

        this.toggleHideUnconfirmed = this.toggleHideUnconfirmed.bind(this);
    }

    toggleHideUnconfirmed() {
        this.setState({
            hideUnconfirmed: !this.state.hideUnconfirmed,
        });
    }

    render() {
        return (
            <div className="main">
                <div>
                    <h2>Invitees</h2>
                    <ConfirmedFilter hideUnconfirmed={ this.state.hideUnconfirmed }
                                     toggleHideUnconfirmed={ this.toggleHideUnconfirmed } />
                </div>
                <Counter guests={ this.props.guests }/>
                <GuestList guests={ this.props.guests }
                            onCheck={ this.props.toggleGuestPropertyAt }
                            pending={ this.props.pendingGuest }
                            setName={ this.props.setGuestName }
                            showConfirmedOnly={ this.state.hideUnconfirmed }
                            onRemoveGuest={ this.props.onRemoveGuest } />
            </div>
        );
    }
}

MainContent.propTypes = {
    guests: PropTypes.object.isRequired,
    toggleGuestPropertyAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    setGuestName: PropTypes.func.isRequired,
    onRemoveGuest: PropTypes.func.isRequired,
};

MainContent.defaultProps = {

};

export default MainContent;
