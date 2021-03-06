import React, { useEffect, useState } from 'react';
import './main.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from 'components/Footer/Footer';
import Mainvideo from 'public/img/video/main.mp4';
import Reelvideo from 'public/img/video/reel.mp4';
import StoryHunter from 'public/img/sub/story_hunter2.png';
import BackStuff from 'public/img/background/sub2.png';
import Landing from "components/Landing/Landing";
import { useHistory, useLocation } from "react-router-dom";
import { mainUrlParam, mainUrlParamKey } from "config";

function Main() {
    // scroll event
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    // landing page
    const history = useHistory();
    const location = useLocation();
    let loadingFlag = true;
    let loadingKey = new URLSearchParams(location.search).get("main");
    if (loadingKey === mainUrlParamKey()) {
        loadingFlag = false;
    }
    const [loading, setLoading] = useState(loadingFlag);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            history.push(mainUrlParam());
        }, 9000);
    }, [loading, history])
    if(loading) return <Landing />

    return (
        <div className="main home">
            <section
                data-aos="flip-up"
                data-aos-duration="3000"
                data-aos-delay="300"
                className="mainVideo">
                <h1 className="videoTitle organic">STORY HUNTER<span>.</span></h1>
                <video
                    src={Mainvideo} autoPlay loop muted playsInline></video>
            </section>
            <section className="mainContainer">
                <article className="center content1">
                    <h2 data-aos="fade-down" className="organic">STORY HUNTER</h2>
                    <div className="imgContents">
                        <img
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            data-aos-delay="800"
                            className="shMain" src={StoryHunter} alt="storyhunter_image" />
                        <img
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                            className="shSub" src={BackStuff} alt="sub_image1" />
                    </div>
                </article>
                <article className="center content2">
                    <div className="txtContainer elice">
                        <h3
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            data-aos-anchor-placement="center-bottom">
                            <strong>????????? ?????????</strong> ????????? ?????? <br/>
                            <strong>???????????? ?????????</strong> ??????????
                        </h3>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            // data-aos-delay="1500"
                            className="story1">
                            ???, ????????? ????????? ????????????. <br/>
                            ????????? ??? ????????? ?????? ????????? ?????? ????????? ?????????. <br/>
                            <span>?????? ?????? ????????????? ?????? ????????????? <br/></span>
                            <span>??? ?????? ????????? ???????????? ????????????! <br/></span>
                            ????????? ???????????? ????????? ???????????? <br/>
                            ????????? ????????? ?????? ????????? ????????? ??????????????????.
                        </p>
                        <div
                            data-aos="fade-right">
                            <p className="story2">
                                ???????????? ????????? ?????????, ?????? ???????????? ????????????. <br/>
                                ???????????? ??? ???????????? ???????????? ?????? ??????????????? ????????? <br/>
                                ????????? ?????? ????????? ???????????????.
                            </p>
                            <p className="txtStrong story3">
                                <strong>
                                    ????????? ??????????????? ???????????? ??????<br/> ???????????? ??? ?????????, <br/>
                                    ???????????? ??? ???????????? ??????????????????.
                                </strong>
                            </p>
                        </div>
                    </div>
                </article>
                <article
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"
                    className="content3">
                    <div className="list listLeft">
                        <div className="listInfo">
                            <h3 className="rozha">PLANNING AND <br/> CONSULTING</h3>
                            <p className="elice">
                                ??????????????? ????????? ????????? ???????????? ?????????, ????????? ????????????
                                ????????? plot??? ??????????????????. Business Strategy Team???
                                ?????????, ?????? ?????????, ??????, ?????? ???????????? ?????? ???????????? ??????
                                ???????????? ???????????? ??????????????? ???????????????.
                            </p>
                        </div>
                        <h2 className="listNum rozha">01</h2>
                    </div>
                    <div className="list listRight">
                        <h2 className="listNum rozha">02</h2>
                        <div className="listInfo">
                            <h3 className="rozha">SYSTEM PLANNING <br/> SIMULATION</h3>
                            <p className="elice">
                                ????????? ???????????? ????????? ?????? ????????? ???????????? ????????? ?????? ??????
                                ????????? ??????????????? ?????????. Creative Technology Team???
                                Interaction R&D Lab??? ????????? ????????? ??????????????? ?????? ??????
                                ?????????????????? ?????? ?????? ????????? ????????? ???????????? ????????????
                                ?????? ????????? ???????????????.
                            </p>
                        </div>
                    </div>
                    <div className="list listLeft">
                        <div className="listInfo">
                            <h3 className="rozha">PRODUCING</h3>
                            <p className="elice">
                                ????????? ????????? ????????? ????????? <br/>
                                Visual Experience Production ?????? ??????????????? ?????? ??????
                                ????????? ?????? ????????? ?????? ????????? ????????? ???????????????.
                                <br/>
                                <br/>
                                <br/>
                            </p>
                        </div>
                        <h2 className="listNum rozha">03</h2>
                    </div>
                    <div className="list listRight">
                        <h2 className="listNum rozha">04</h2>
                        <div className="listInfo">
                            <h3 className="rozha">MUSEUM <br/> PLATFORM</h3>
                            <p className="elice">
                                ????????? ????????? ????????? ??????! <br/>
                                Audio Guide Platform ???????????? ????????? ????????? ???????????? ?????????
                                ????????? ?????? ??????????????? ???????????? &ensp; ???????????? ???????????????.
                                ?????? ???????????? ????????? After Museum???
                                ???????????? ????????? ????????? ?????????
                                ????????? ?????? ???????????????.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="content4">
                    <div
                        data-aos="fade-down"
                        data-aos-anchor-placement="top-bottom"
                        className="reelWrap">
                        <div
                            data-aos="fade-right"
                            data-aos-delay="1000"
                            className="reelTxt">
                            <h2 className="rozha">SHOWREEL</h2>
                            <h3>PEOPULLE IS MEDIA ART COMPANY</h3>
                            <button onClick={() => {window.location.replace("/showreel-2020")}}>PLAY<i className="fas fa-angle-right"></i></button>
                        </div>
                        <video src={Reelvideo} autoPlay loop muted playsInline></video>
                    </div>
                </article>
            </section>
            <Footer/>
        </div>
    )
}
export default Main;
