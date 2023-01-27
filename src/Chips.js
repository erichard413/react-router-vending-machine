import React, {useState} from 'react';
import Chip from './Chip';
import uuid from 'react-uuid';
import { NavLink } from 'react-router-dom';

const Chips = () => {

    const [chips, setChips] = useState([]);

    const addChip = () => {
        setChips([...chips, 'chip']);
    }

    return(
        <div>
            <p>Bags Eaten: {chips.length}</p>
            <button onClick={addChip}>NOM NOM NOM</button>
            <NavLink to='/'>GO BACK</NavLink>
            {chips.map(c => <Chip key={uuid()} />)}
        </div>
    )
}

export default Chips;