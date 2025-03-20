import { createContext, useState } from "react";
import run from "../config/gemini.js"; // Correct import

const Context = createContext();

const ContextProvider = (props) => {

    const [Input, setInput] = useState(" ");
    const [Recentprompt, setRecentprompt] = useState(" ");
    const [Previousprompt, setPreviousprompts] = useState([]);
    const [Showresult, setShowresult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultdata, setResultdata] = useState(" ");

    const delarpara = (index, nextword) => {
        setTimeout(function () {
            setResultdata(prev => prev + nextword);
        }, 75 * index)
    }
    const onSent = async (prompt) => {
        setResultdata("");
        setShowresult(true);
        setRecentprompt(Input);
        setPreviousprompts(prev=>[...prev,Input])
        setLoading(true);
        setRecentprompt(Input);
        const response = await run(prompt);
        let responseArray = response.split("**");
        let newresponse;
        for (let i = 0; i < responseArray.length; i++) {
            if (i == 0 || i % 2 == 1) {
                newresponse += responseArray[i];
            }
            else {
                newresponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newresponse2 = newresponse.split("*").join("</br>")
        let newresponsearray= newresponse2.split(" ");
        for(let i=0;i<newresponsearray.length; i++)
        {
            const nextword = newresponsearray[i];
            delarpara(i,nextword+" ");
        }
        setResultdata(newresponse2);
        setLoading(false);
        setInput("");
    };


    const contextValue = {
        Previousprompt,
        setPreviousprompts,
        onSent,
        setRecentprompt,
        Recentprompt,
        Showresult,
        loading,
        resultdata,
        Input,
        setInput
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export { Context };
export default ContextProvider;
