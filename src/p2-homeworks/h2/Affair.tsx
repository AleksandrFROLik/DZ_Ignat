import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    name: string
    priority: string
    affair: AffairType // need to fix any
    deleteAffairCallback: (aID: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.divAffairs}>
            <div>{props.name}</div>
            <div>{props.priority}</div>
            <button onClick={deleteCallback} className={style.button}>X</button>
        </div>
    )
}

export default Affair
