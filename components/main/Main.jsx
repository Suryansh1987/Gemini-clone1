import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../src/context/Minext";

const Main = () => {

    const { onSent, Recentprompt, Showresult, loading, resultdata, setInput, Input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>
                    Gemini

                </p>
                <img src={assets.user_icon} alt=" " />
            </div>
            <div className="main-container">
                {!Showresult ? <>
                    <div className="greet">
                        <p>
                            <span> Hello, dev</span>
                        </p>
                        <p>How are you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest Beautifull Places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt=" " />
                        </div>
                        <div className="card">
                            <p>Give me some interesting games to play today</p>
                            <img src={assets.bulb_icon} alt=" " />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt=" " />
                        </div>
                    </div></> : <div className="result">
                    <div className="result-title">
                            <img src={assets.user_icon} alt="User Icon" />
                            <p>{Recentprompt}</p> 
                        </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt=" " />
                        {loading?<div className="loader">
                            <hr />
                            <hr />
                            < hr />
                            
                             </div>:<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>}
                        
                    </div>
                    </div>}
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={Input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt=" " />
                            <img src={assets.mic_icon} alt=" " />
                            <img onClick={() => onSent(Input)} src={assets.send_icon} alt=" " />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini May display inaccurate info, including about people, so double-check its answers.
                    </p>
                </div>
            </div>

        </div>
    )

}
export default Main;