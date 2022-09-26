import React from "react";
import {observer} from "mobx-react";
import LoginOrgForm from "./Form";
import {Formik} from "formik";
import {AuthDTOTypes} from "../../../types/auth.dto";
import {validationSchema} from "./validationSchema";
import {useRootData} from "../../../utils/hooks/store";

const initialValue: AuthDTOTypes.IAuthLoginRequest = {
    email: '',
    password: ''
}

export const Login = observer(() => {
    const {authRequest, isAuth} = useRootData((store) => store.authStore);

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={authRequest}
        >
            <LoginOrgForm/>
        </Formik>
    )
});

export default Login;