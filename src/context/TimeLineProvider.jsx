import { useState } from "react";
import { TimeLineContext } from "./TimeLineContext";



const TimeLineProvider = ({children}) => {
    const [callTimeLine, setCallTimeLine] = useState([]);

    const data = {
        
        callTimeLine,
        setCallTimeLine,
    }

    return <TimeLineContext.Provider value={data}>
        {children}
    </TimeLineContext.Provider>
};

export default TimeLineProvider;