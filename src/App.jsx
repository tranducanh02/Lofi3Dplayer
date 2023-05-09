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
                <div className='wrapper'>
                    <div className='text'>
                        <h1>Lofi Music 3D Room</h1>
                        <h3>
                            Immerse yourself in the world of lofi music with our
                            interactive 3D experience
                        </h3>
                        <button className='start' onClick={hideDiv}>
                            Exploring now
                        </button>
                    </div>
                    <div className='info'>
                        <p>
                            Welcome to our 3D lofi music player! Our website is
                            designed to provide a unique and immersive listening
                            experience that combines the calming sounds of lofi
                            music with the visual appeal of interactive 3D
                            objects. Whether you're studying, relaxing, or just
                            in need of some background noise, our website is the
                            perfect destination. <br /> As soon as you enter our
                            website, you'll be transported to a virtual world
                            filled with 3D objects that you can interact with.
                            These objects respond to your movements, allowing
                            you to explore and interact with them in a way that
                            feels natural and intuitive. Use your keyboard and
                            mouse to explore! <br></br> And of course, the main
                            attraction of our website is our collection of lofi
                            music tracks. Each track is carefully selected to
                            provide a soothing and relaxing experience, and is
                            complemented by the visuals of our 3D environment.
                            You can choose to play our pre-made playlists, or
                            create your own custom playlists to suit your mood.
                            So sit back, relax, and enjoy the unique experience
                            of our 3D lofi music player. <br /> We hope you
                            enjoy exploring our virtual world and discovering
                            all of the hidden surprises it has to offer!
                        </p>
                    </div>
                </div>
            )}

            <Spline scene='https://prod.spline.design/Pb-5DQMgtxchZTjL/scene.splinecode' />
        </>
    );
}
