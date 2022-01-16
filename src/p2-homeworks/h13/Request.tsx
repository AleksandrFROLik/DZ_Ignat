import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./api/Request-API";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const responseAPI = () => {
        requestAPI.createResponse(checked)
            .then((res) => {

            })
            .catch((e) => {

            })
    }

    return (
        <div>
            <SuperButton onChange={responseAPI}>
                Button API
            </SuperButton>
            <SuperCheckbox checked={checked}
                           onChangeChecked={setChecked}>
                Answer
            </SuperCheckbox>

        </div>
    );
};

export default Request;