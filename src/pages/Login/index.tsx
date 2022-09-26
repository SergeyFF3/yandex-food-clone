import React from "react";
import {observer} from "mobx-react";
import {useRootData} from "../../utils/hooks/store";
import {LoginForm} from "./Form";
import {Formik} from "formik";
import {AuthDTOTypes} from "../../types/auth.dto";
import {validationSchema} from "./validationSchema";


const initialValue: AuthDTOTypes.IAuthLoginRequest = {
    email: '',
    password: ''
}

export const LoginOrg = observer(() => {
    const {authRequest, isAuth} = useRootData((store) => store.authStore);

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={authRequest}
        >
            <LoginForm/>
        </Formik>
    )
});

export default LoginOrg;