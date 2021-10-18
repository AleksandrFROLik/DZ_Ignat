import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (priority: FilterType)=>void
    deleteAffairCallback: (aID:number)=>void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            name={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = () => {
        return props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        return props.setFilter('high')
    }
    const setMiddle = () => {
        return props.setFilter('middle')
    }
    const setLow = () => {
        return props.setFilter('low')
    }

    return (
        <div className={style.divButton}>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
