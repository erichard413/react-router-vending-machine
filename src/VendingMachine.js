import React from 'react';
import {NavLink} from 'react-router-dom';
import './VendingMachine.css';


const VendingMachine = () => {
    return(
        <div className="VendingMachine">
            <div className="message">
                <p>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</p>
            </div>
            <div className="options">
                <ul className="ul-options">
                    <li>
                        <NavLink to='soda'>SODA</NavLink>
                    </li>
                    <li>
                        <NavLink to='chips'>CHIPS</NavLink>
                    </li>
                    <li>
                        <NavLink to='freshsardines'>FRESH SARDINES</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default VendingMachine;