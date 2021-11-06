import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from '../../p1-main/m1-ui/u1-app/App.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}
export type initialPeopleType = Array<UserType>

const initialPeople: initialPeopleType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<initialPeopleType>(initialPeople) // need to fix any
    console.log(people)
    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}
             className={style.HW}
        >
            <div className={style.name}>{p.name}</div>
            <div className={style.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortUp', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortDown', payload: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={style.button}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check}>check 18</SuperButton></div>
            </div>
            {/*<div>sort down</div>*/}
            {/*check 18*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
