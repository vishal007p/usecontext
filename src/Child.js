
import { useContext } from 'react';
import { GlobalInfo } from './App'
import { useState } from 'react';

function Child() {
    const { appcolor } = useContext(GlobalInfo)
    return (
        <div>
            <h1 style={{ color: appcolor }}>Child Component</h1>
        </div>
    );
}

export default Child;
