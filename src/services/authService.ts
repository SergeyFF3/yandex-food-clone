import {AxiosResponse} from "axios";
import {authLoginURL, authRegistrationURL} from "../config/apiListURL";
import {AuthDTOTypes} from "../types/auth.dto";
import axios from "../config/axios";

export class authService  {
    static authRequestService(userInfo: AuthDTOTypes.IAuthLoginRequest): Promise<AxiosResponse<AuthDTOTypes.IAuthLoginResponse>> {
        return axios.post(authLoginURL, userInfo);
    }

    static regRequestService(userInfo: AuthDTOTypes.IAuthLoginRequest): Promise<AxiosResponse<AuthDTOTypes.IAuthLoginResponse>> {
        return axios.post(authRegistrationURL, userInfo)
    }
}

export default authService;
