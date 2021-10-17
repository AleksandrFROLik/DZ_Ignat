import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './HeaderHW.module.css'


function HeaderHW() {
    return (
        <div className={s.linkItems}>
            <NavLink to={PATH.PRE_JUNIOR}>pre_junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>junior_plus</NavLink>
        </div>
    )
}

export default HeaderHW
