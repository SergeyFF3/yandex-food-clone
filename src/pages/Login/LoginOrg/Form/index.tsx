import React from "react";
import {Form} from "formik";
import {Button} from "@mui/material";
import TextFieldDefault from "../../../../components/TextField";
import {Link} from "react-router-dom";

export const LoginOrgForm = () => {
    return <div className="d-flex align-items-center justify-content-center "
                style={{
                    height: 'calc(100% - 80px)'
                }}>
        <div className="col-4">
            <div className="p-5"
                 style={{
                     background: 'rgba(128, 128, 128, .1)',
                     borderRadius: '20px'
                 }}>
                <h2 className="text-center mt-0">Войдите с Foody ID <br/> как организация</h2>
                <Form className="login-form d-flex flex-column align-items-center justify-content-start">

                    <TextFieldDefault id="email" placeholder="email" className="mb-1 mt-1"/>
                    <Button
                        type="submit"
                        variant="contained"
                        className="w-100 mt-3"
                        size="large"
                    >
                        Войти
                    </Button>
                </Form>
                <Link
                    to='/reg-org'
                    className="d-block pt-2 color-link text-center"
                >
                    Зарегистрировать организацию
                </Link>
            </div>
        </div>
    </div>
};

export default LoginOrgForm;