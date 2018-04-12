import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

class GuestList extends Component {

    render() {

        const guests = this.props.showConfirmedOnly ?
            Array.from(this.props.guests).filter(guest => guest.isConfirmed) :
            Array.from(this.props.guests);

        return (
            <ul>
                { this.props.pending ? <li className="pending"><span>{ this.props.pending }</span></li> : '' }
                {
                guests.map(guest => {
                    return <Guest key={ guest.id }
                                  guest={ guest }
                                  handleConfirmedState={ () => this.props.onCheck('isConfirmed', guest.id) }
                                  handleEditState={ () => this.props.onCheck('isEditing', guest.id) }
                                  setNameAt={ text => this.props.setName(text, guest.id) }
                                  handleRemoveGuest={ () => this.props.onRemoveGuest(guest.id) }/>
                })
                }
            </ul>
        );
    }

}

GuestList.propTypes = {
    guests: PropTypes.object.isRequired,
};

export default GuestList;
