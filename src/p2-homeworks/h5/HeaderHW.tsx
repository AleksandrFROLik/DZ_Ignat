import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './HeaderHW.module.css'


function HeaderHW() {
    return (
        <div className={s.linkItems}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre_junior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>junior_plus</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default HeaderHW
