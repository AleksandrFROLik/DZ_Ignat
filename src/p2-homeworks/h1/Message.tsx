import React from 'react'
import s from './Message.module.css'

type propsMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsMessageType) {
    return (
        <div className={s.dialog}>
            <div className={s.avatar}>
                <img className={s.pic} src={props.avatar} alt="elf"/>
            </div>
            <div className={s.ugolok}/>
            <div className={s.messageArea}>
                <div>
                    <div className={s.name}>{props.name}</div>
                </div>
                <div className={s.component}>
                    <div className={s.messageItem}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
