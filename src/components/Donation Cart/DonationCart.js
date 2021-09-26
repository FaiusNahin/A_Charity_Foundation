import React from 'react';
import './DonationCart.css';

const DonationCart = (props) => {
    const { donationCart } = props;
    let total = 0;
    for (const member of donationCart) {
        total = total + member.donation;
    }

    return (
        <div>
            <h2>Added people: {donationCart.length}</h2>
            <h2>Total Donation: ${total.toFixed(2)}</h2>
            <div className="Name">
                <div>
                    <p>name:</p>
                </div>
                <div>
                    {
                        donationCart.map(member => {
                            return (
                                <ul>
                                    <li>{member.name}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DonationCart;