import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Make A Charity Foundation</h1>
            <p>He who has never denied himself for the sake of giving, has but glanced at the joys of charity.</p>
            <h2>Total Buddget<span className="buddget">: 1 Million</span></h2>
        </div>
    );
};

export default Header;