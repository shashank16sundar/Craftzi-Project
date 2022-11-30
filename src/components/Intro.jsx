import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import bgVideo from "../Assets/Videos/Potters.mp4";

function Intro() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <video src={bgVideo} autoPlay loop muted style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }} />
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "50px"
            }}>
                <Navbar />
                <Landing />
            </div>
        </div>
    )
}

export default Intro;