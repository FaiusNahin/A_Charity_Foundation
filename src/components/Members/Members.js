import React, { useEffect, useState } from 'react';
import DonationCart from '../Donation Cart/DonationCart';
import Member from '../Member/Member';
import './Members.css'

const Members = () => {
    const [members, setmembers] = useState([]);
    const [donationCart, setDonationCart] = useState([]);

    useEffect(() => {
        fetch('./charity.JSON')
            .then(res => res.json())
            .then(data => setmembers(data))
    }, []);
    const handleAddToDonationCart = member => {
        if (!donationCart.includes(member)) {
            const newdonationCart = [...donationCart, member];
            setDonationCart(newdonationCart);
        }

    }

    return (
        <div className="charity-container">
            <div className="members-container">
                {
                    members.map(member => <Member
                        key={member.ceoId}
                        member={member}
                        handleAddToDonationCart={handleAddToDonationCart}
                    ></Member>)
                }
            </div>
            <div className="cart-container">
                {
                    <DonationCart donationCart={donationCart}></DonationCart>
                }
            </div>
        </div>
    );
};

export default Members;