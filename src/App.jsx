import Spline from '@splinetool/react-spline';
import React, { useState } from 'react';

export default function App() {
    const [showDiv, setShowDiv] = useState(true);

    const hideDiv = () => {
        setShowDiv(false);
    };

    return (
        <>
            {showDiv && <div className='container'></div>}
            {showDiv && (
                <div className='text'>
                    <h1>Lofi Music 3D Room</h1>
                    <h3>The best lofi music player for your needs</h3>
                    <button onClick={hideDiv}>Start listening now</button>
                </div>
            )}

            <Spline scene='https://prod.spline.design/Pb-5DQMgtxchZTjL/scene.splinecode' />
        </>
    );
}
