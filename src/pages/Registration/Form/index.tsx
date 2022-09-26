import React from "react";
import {Button} from "@mui/material";
import {Form} from "formik";
import TextFieldDefault from "../../../components/TextField";
import TabsReg from "../../../components/TabsAuth";
import {Link} from "react-router-dom";

export const RegistrationForm = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mb-5"
             style={{
                 height: 'calc(100% - 80px)'
             }}>
            <div className="col-4">
                <div className="p-5"
                     style={{
                         background: 'rgba(128, 128, 128, .1)',
                         borderRadius: '20px'
                     }}>
                    <h3 className="text-center mt-0">Введите номер телефона для <br/> создания Foody ID</h3>
                    <Form className="login-form d-flex flex-column align-items-center justify-content-start">
                        <>
                            <TextFieldDefault id="email" placeholder="example@mail.ru" className="pt-1 pb-1"/>
                            <TextFieldDefault id="password" placeholder="214125" className="pt-1 pb-1"/>
                            <Button
                                type="submit"
                                variant="contained"
                                className="w-100 mt-3"
                                size="large"
                            >
                                Далее
                            </Button>
                        </>
                    </Form>
                    <Link
                        to='/auth'
                        className="d-block pt-2 color-link text-center"
                    >
                        Уже есть аккаунт?
                    </Link> <Link
                    to='/auth'
                    className="d-block pt-2 color-link text-center"
                >
                </Link>

                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;