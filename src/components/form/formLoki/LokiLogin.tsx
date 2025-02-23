"use client";

import React, { useState } from 'react'
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import { RECAPTCHA_KEY } from "@env";

import ResetPassWord from './faces/ResetPassWord';
import Login from './faces/Login';
import Register from './faces/Register';



interface LokiLoginProps {
    register?: boolean;
    reset?: boolean
}

const LokiLogin: React.FC<LokiLoginProps> = ({
    register = true,
    reset = true
}) => {
    const [formState, setFormState] = useState("initial");

    const cardState = (css: string) => {
        setFormState(css);
    };

    return (
        <div className={`container-form-loki ${formState}`} id='containerFormLoki'>
            {/* <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}> */}
                {reset && <ResetPassWord cardState={cardState} />}
                <Login cardState={cardState} register={register} reset={reset} />
                {register && <Register cardState={cardState} />}
            {/* </GoogleReCaptchaProvider> */}
        </div>
    );
}

export default LokiLogin;