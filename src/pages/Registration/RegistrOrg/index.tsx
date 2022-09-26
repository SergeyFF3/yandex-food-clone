import React from "react"
import {observer} from "mobx-react";
import {Formik} from "formik";
import RegistrOrgForm from "./Form/index";
import {validationSchema} from "./validationSchema";

export const RegistrOrg = observer(() => {
    return (
        <Formik
            initialValues={{
                name: ""

            }}
            validationSchema={validationSchema}
            onSubmit={(val) => console.log('onSubmit', val)}
        >
            <RegistrOrgForm/>
        </Formik>
    )
})

export default RegistrOrg;