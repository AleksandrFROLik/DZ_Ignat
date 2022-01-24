import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./api/Request-API";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [answer, setAnswer] = useState<string | null>('')

    const responseAPI = () => {
        requestAPI.createResponse(checked)
            .then((res) => {
                setAnswer(res.statusText)
                console.log(res.data)
            })
            .catch((e) => {
                setAnswer(e.response ? e.response.data.errorText : e.message)
            })
    }

    return (
        <div>
            <SuperButton onClick={responseAPI}>
                Button API
            </SuperButton>
            <SuperCheckbox checked={checked}
                           onChangeChecked={setChecked}
                           >
            </SuperCheckbox>
            {(answer)?.toUpperCase()}

        </div>
    );
};

export default Request;