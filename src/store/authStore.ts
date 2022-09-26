import {action, makeObservable, observable} from "mobx";
import {authService as AS} from "../services/authService";
import {AuthDTOTypes} from "../types/auth.dto";

interface IAuthStore {
    isAuth: boolean;
    authRequest: (values: AuthDTOTypes.IAuthLoginRequest) => void;
    regRequest: (values: AuthDTOTypes.IAuthLoginRequest) => void;
    email: string
}

export class AuthStore implements IAuthStore {
    @observable isAuth: boolean = false
    @observable email: string = ''

    constructor() {
        makeObservable(this)
    }

    @action regRequest = (values: AuthDTOTypes.IAuthLoginRequest) => {
        AS.regRequestService(values)
            .then((res) => {
                console.log('res', res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    @action authRequest = (values: AuthDTOTypes.IAuthLoginRequest) => {
        this.email = values.email
        AS.authRequestService(values)
            .then((res) => {
                if (res.status === 201 || res.status === 200) {
                    this.isAuth = true;
                }
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
}

export default AuthStore;