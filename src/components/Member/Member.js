import React from 'react';
import './Member.css'

const Member = (props) => {
    // console.log(props.member);
    const { name, born, image, company, bio, donation } = props.member;
    return (
        <div className="member">
            <div>
                <img className="member-img" src={image} alt="" />
            </div>
            <div className="member-details">
                <h2>{name}</h2>
                <p>{born}</p>
                <small>works in: <h3 style={{ display: 'inline-block' }}>{company}</h3></small>
                <p>Donate: ${donation}</p>
                <p>{bio.slice(0, 100)}</p>
                <button onClick={() => props.handleAddToDonationCart(props.member)}>add donation</button>
            </div>
        </div>
    );
};

export default Member;