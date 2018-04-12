import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    const stats = generateStatistics(props.guests);

    return (
        <table className="counter">
            <tbody>
                <tr>
                    <td>Attending:</td>
                    <td>{ stats.confirmed }</td>
                </tr>
                <tr>
                    <td>Unconfirmed:</td>
                    <td>{ stats.unconfirmed }</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>{ stats.total }</td>
                </tr>
            </tbody>
        </table>
    );
}

/**
 * @private
 * @param {Array} guests
 */
function generateStatistics(guests) {
    let stats = {
      total: 0,
      confirmed: 0,
      unconfirmed: 0,
    };

    for (let i = 0; i < guests.length; i++) {
        const guest = guests[i];

        stats.total++;
        stats.confirmed += guest.isConfirmed;
        stats.unconfirmed += !guest.isConfirmed;
    }

    return stats;
}

Counter.propTypes = {
    guests: PropTypes.object.isRequired,
};

export default Counter;
