import React from 'react';
import './DonationCart.css';

const DonationCart = (props) => {
    const { donationCart } = props;

    // Calculate Total Donation
    let total = 0;
    for (const member of donationCart) {
        total = total + member.donation;
    }

    return (
        // Total Donor's and Total Donation
        <div className="container">
            <h2 className="donation-title">
                People Donated: <span className="donation-details">{donationCart.length}</span></h2>
            <h2 className="donation-title" style={{ marginBottom: '0px' }}>
                Total Donation: <span className="donation-details">${total.toFixed(2)}</span></h2>
            <div className="added-names">
                <div>
                    <p className="name-title">Name:</p>
                </div>
                {/* Donor's Name */}
                <div style={{ textAlign: 'left' }}>
                    {
                        donationCart.map(member => {
                            return (
                                <ul
                                    key={member.ceoId}
                                    className="donor-list">
                                    <li className="donor-name">{member.name}</li>
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