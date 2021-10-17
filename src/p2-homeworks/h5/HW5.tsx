import React from 'react'
import HeaderHW from "./HeaderHW";
import Routes from './Routes'
import {HashRouter} from "react-router-dom";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <HeaderHW/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
