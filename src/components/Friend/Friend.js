import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Friend</h3>
            <p><small>house: {house}</small></p>
                <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;