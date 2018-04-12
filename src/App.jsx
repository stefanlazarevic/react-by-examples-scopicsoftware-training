import React, { Component } from 'react';
import './App.css';
import applicationState from './applicationState';

import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      guests: applicationState,
      pendingGuest: '',
    }

    this.toggleGuestPropertyAt = this.toggleGuestPropertyAt.bind(this);
    this.setGuestName = this.setGuestName.bind(this);
    this.onInviteInputChange = this.onInviteInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeGuest = this.removeGuest.bind(this);

    this.uniqueId = uniqueId('guest_');
  }

  toggleGuestPropertyAt(property, id) {
    const guests = this.state.guests;
    guests[id][property] = !guests[id][property];

    this.setState({
      guests
    });
  }

  setGuestName(text, id) {
    const guests = this.state.guests;
    guests[id].name = text;

    this.setState({
      guests
    });
  }

  onInviteInputChange(e) {
    this.setState({
      pendingGuest: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const id = this.uniqueId();
    const guests = this.state.guests;
    guests[id] = {
      id,
      name: this.state.pendingGuest,
      isEditing: false,
      isConfirmed: false,
    };
    guests.length++;

    this.setState({
      guests,
      pendingGuest: '',
    });
  }

  removeGuest(id) {
    let guests = this.state.guests;
    delete guests[id];
    guests.length--;

    this.setState({
      guests,
    });
  }

  render() {
    return (
      <div className="App">
        <Header handleFormSubmit={ this.onFormSubmit }
                handleInputChange={ this.onInviteInputChange }
                inviteFormInputValue={ this.state.pendingGuest } />
        <MainContent guests={ this.state.guests }
                     pendingGuest={ this.state.pendingGuest }
                     handleRemoveGuest={ this.removeGuest }
                     setGuestName={ this.setGuestName }
                     toggleGuestPropertyAt={ this.toggleGuestPropertyAt }
                     onRemoveGuest={ this.removeGuest } />
      </div>
    );
  }
}

function uniqueId() {
  var counter = 0;
  return function () {
    return counter++;
  }
}

export default App;
