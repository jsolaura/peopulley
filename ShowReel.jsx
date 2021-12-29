import React from "react";
import './main.css';
import Reelvideo from "public/img/video/reel.mp4";
import Footer from "components/Footer/Footer";
import { mainUrlParam } from "config";
function ShowReel() {
    return (
        <div className="detailReel">
            <h2 className="rozha">
                <button onClick={() => {window.location.replace(`/${mainUrlParam()}`)}} className="goHome"><i className="fas fa-chevron-left"></i></button>
                Showreel 2020
            </h2>
            <div className="reelArea">
                <video src={Reelvideo} autoPlay={true} loop={true} muted></video>
            </div>
            <Footer />
        </div>
    )
}
export default ShowReel;