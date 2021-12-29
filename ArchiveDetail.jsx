import './detail.css';
import { archiveDetail } from "dummyData";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../components/Footer/Footer";


function ArchiveDetail () {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
    let [data, setData] = useState(archiveDetail);
    useEffect(() => {
        setData(archiveDetail)
    }, [])

    let { id } = useParams();
    let chk;
    data.find((content) => {
        if (content.id == id)
            chk = content.id;
    })

    // prev, next button onclick 이벤트
    const history = useHistory();
    const goBack = () => {
        history.push(`/works/archive/${chk-1}`);
        if ( chk == 1 ) {
            return history.push('/works/archive');
        }
    }
    const goForward = () => {
        history.push(`/works/archive/${chk+1}`);
        if( chk == 23 ) {
            return history.push('/works/archive');
        }
    }

    const Item = ({ text }) => {
        return <p>
            {text.split("\n").map((txt) => (
                <>
                    {txt}
                    <br />
                </>
            ))}
        </p>;
    };
    const imageRendering = () => {
        const result = [];
        for(let i=0; i<data[chk].images.length; i++) {
            result.push(<img src={process.env.PUBLIC_URL + data[chk].images[i]} alt="image1" className="sound_only" />)
        }
        return result;
    }
    const iframeRendering = () => {
        const result = [];
        for(let i=0; i<data[chk].iframe.length; i++) {
            result.push(<iframe data-aos="fade-in" data-aos-delay="500" src={data[chk].iframe[i]} title="YouTube video" frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />)
        }
        return result;
    }
    return (
        <>
            <div key={data[chk].id} className="archive">
                <div className="detailHeader">
                    <div className="headerText doHyeon">
                        <h2><Item key={data[chk].title} text={data[chk].title} /></h2>
                        <h3><Item key={data[chk].subTitle} text={data[chk].subTitle} /></h3>
                    </div>
                    <img src={process.env.PUBLIC_URL + data[chk].headerImage} alt="headerImage" />
                    <div className="controler">
                        <button onClick={goBack} className="prev"><i className="fas fa-chevron-left"></i></button >
                        <button onClick={goForward} className="next"><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <section className={'detailMain'+ data[chk].id}>
                    {/*<div className={data[chk].background}></div>*/}
                    <div className="infoContainer">
                        <div
                            data-aos="flip-right"
                            className="infoLeft doHyeon">
                            <h4><Item key={data[chk].h2} text={data[chk].h2}/></h4>
                            <h5><Item key={data[chk].h3} text={data[chk].h3}/></h5>
                        </div>
                        <div className="infoRight elice">
                            <dl>
                                <dt>LOCATION</dt>
                                <dd
                                    data-aos="fade-in"
                                    data-aos-delay="500"
                                    className="noto">{data[chk].location}</dd>
                                <dt>DATE</dt>
                                <dd
                                    data-aos="fade-in"
                                    data-aos-delay="800">{data[chk].date}</dd>
                                <dt>CATEGORY</dt>
                                <dd
                                    data-aos="fade-in"
                                    data-aos-delay="1000"><Item key={data[chk].category} text={data[chk].category} /></dd>
                                <dt>ROLE</dt>
                                <dd
                                    data-aos="fade-in"
                                    data-aos-delay="1200"><Item key={data[chk].role} text={data[chk].role} /></dd>
                            </dl>
                        </div>
                    </div>
                    <div className="iframeContainer">
                        {iframeRendering()}
                    </div>
                    <div data-aos="fade-right"
                         className="stills rozha">
                        {data[chk].still}
                    </div>
                    <div data-aos="fade-left"
                         className="imgContainer">
                        {imageRendering()}
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    )





}
export default ArchiveDetail;

