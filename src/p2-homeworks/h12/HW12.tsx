import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];


function HW12() {
    const theme = useSelector<AppStoreType, {themes: string}>(state => state.themes); // useSelector

    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeOption = ( theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div >
            {/*className={s[theme]}*/}
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                options={themes}
                onChangeOption={onChangeOption}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
