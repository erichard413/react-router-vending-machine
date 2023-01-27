import React from 'react';
import {NavLink} from 'react-router-dom';
import img from './Images/soda.png';

const Soda = () => {
    return(
        <div>
            <div>
                <div className="Soda-img">
                    <img src={img} alt="Coca Cola can"/>
                </div>
                <div>
                    <p>OMG SUGAR!!</p>
                    <NavLink to='/'>GO BACK</NavLink>
                </div>
                <div>
                    <img src={img} alt="Coca Cola can"/>
                </div>
            </div>

        </div>
    )
}

export default Soda;