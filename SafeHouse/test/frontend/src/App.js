import React from 'react';
import './App.css';
import {playVideoFromCamera} from './WebRTC.js';

export default function App() {
    const constraints = {video: {deviceId: 'e2df00c9aa96fd6f227c7d6de61383165afe3d6216e5c171513000d53cd8cd91'}, audio: false};
    // playVideoFromCamera(constraints);

    return (
        <div className='App'>
            <video id='localVideo' autoPlay playsInline controls={false} />
        </div>
    );
};