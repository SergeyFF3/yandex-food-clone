import React from "react"
import {observer} from "mobx-react";
import {Formik} from "formik";
import RegistrationForm from "./Form";
// import {validationSchema} from "./validationSchema";
import {useRootData} from "../../utils/hooks/store";

export const Registration = observer(() => {
    const regStore = useRootData((store) => store.authStore);

    console.log('regStore', regStore)

    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            // validationSchema={validationSchema}
            onSubmit={(val) => {
                debugger
                regStore.regRequest(val)
            }}
        >
           <RegistrationForm/>
        </Formik>
    )
})

export default Registration;