import React from 'react';
import './Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Member = (props) => {
    const { name, born, image, company, bio, donation } = props.member;
    const element = <FontAwesomeIcon icon={faDonate} />

    // Show Members Details
    return (
        <div className="member">
            <div>
                <img className="member-img" src={image} alt="" />
            </div>
            <div className="member-details">
                <h2 className="name">{name}</h2>
                <p className="birth-date">born in: <span style={{ fontSize: '18px' }}>{born}</span></p>
                <p>works in: <span className="company">{company}</span></p>
                <p>Donate: <span style={{ fontSize: '20px' }}>${donation}</span></p>
                <p>{bio.slice(0, 100)}</p>

                {/* add donation button */}
                <button className="member-btn" onClick={() => props.handleAddToDonationCart(props.member)}>{element} add donation</button>
            </div>
        </div >
    );
};

export default Member;