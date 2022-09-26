export namespace AuthDTOTypes {
    export interface IAuthLoginRequest {
        email: string;
        password: string;
    }
    export interface IAuthLoginResponse {
        token: string;
    }
}