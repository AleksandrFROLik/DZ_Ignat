import React from "react";
import style from "./JuniorPlus.module.css"
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";


export const JuniorPlus = () => {
    return (
        <div className={style.juniorPlusBlock}>
            <HW10/>
            <HW11/>
            <HW12/>
        </div>
    )
}