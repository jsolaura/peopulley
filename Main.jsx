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
                            <strong>우리는 살면서</strong> 얼마나 많은 <br/>
                            <strong>이야기를 접하게</strong> 될까요?
                        </h3>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            // data-aos-delay="1500"
                            className="story1">
                            자, 하나의 상자가 있습니다. <br/>
                            우리는 이 상자를 보며 저마다 다른 생각을 합니다. <br/>
                            <span>안에 뭐가 들었을까? 누가 두고갔지? <br/></span>
                            <span>저 안에 사과를 담아두면 딱이겠다! <br/></span>
                            하나의 원형에서 파생된 호기심은 <br/>
                            꼬리에 꼬리를 물고 상상의 세계를 만들어냅니다.
                        </p>
                        <div
                            data-aos="fade-right">
                            <p className="story2">
                                이야기는 보이지 않지만, 사실 어디에나 있습니다. <br/>
                                피플리는 그 이야기를 찾아내고 기술 아이디어를 더하여 <br/>
                                특별한 전시 경험을 제공합니다.
                            </p>
                            <p className="txtStrong story3">
                                <strong>
                                    무수한 문화원형은 피플리가 쓰는<br/> 이야기의 첫 장이며, <br/>
                                    관람객은 그 이야기의 주인공입니다.
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
                                문화원형의 숨겨진 행간을 찾아내는 것부터, 컨셉을 기획하고
                                하나의 plot을 완성하기까지. Business Strategy Team의
                                기획자, 아트 디렉터, 작가, 공간 디자이너 등의 구성원이 함께
                                고민하며 다채로운 아이디어를 제시합니다.
                            </p>
                        </div>
                        <h2 className="listNum rozha">01</h2>
                    </div>
                    <div className="list listRight">
                        <h2 className="listNum rozha">02</h2>
                        <div className="listInfo">
                            <h3 className="rozha">SYSTEM PLANNING <br/> SIMULATION</h3>
                            <p className="elice">
                                우리의 이야기로 특별한 전시 경험을 전달하기 위해선 그에 맞는
                                기술이 뒷받침돼야 합니다. Creative Technology Team과
                                Interaction R&D Lab의 미디어 시스템 전문가들은 여러 번의
                                시뮬레이션을 통해 실현 가능한 기술을 개발하여 최적화된
                                운영 방식을 찾아갑니다.
                            </p>
                        </div>
                    </div>
                    <div className="list listLeft">
                        <div className="listInfo">
                            <h3 className="rozha">PRODUCING</h3>
                            <p className="elice">
                                우리가 구축한 상상의 세계는 <br/>
                                Visual Experience Production 영상 디자이너의 손을 거쳐
                                각자의 색을 덧입혀 더욱 특별한 세계로 그려냅니다.
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
                                세상에 어려운 전시는 없다! <br/>
                                Audio Guide Platform 큐피커는 각자의 다양한 시선으로 전시와
                                미술에 대해 이야기하는 큐레이션 &ensp; 서비스를 제공합니다.
                                또한 온디맨드 쇼핑몰 After Museum은
                                전시에서 소개된 다양한 작품과
                                상품을 주문 판매합니다.
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
