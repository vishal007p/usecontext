
import { useContext } from 'react';
import { GlobalInfo } from './App'
import { useState } from 'react';

function OtherChild() {
    const { appcolor } = useContext(GlobalInfo)
    return (
        <div>
            <h1 style={{ color: appcolor }}>OtherChild Component</h1>
        </div>
    );
}

export default OtherChild;
