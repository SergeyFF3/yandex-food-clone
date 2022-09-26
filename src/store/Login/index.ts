import {action, makeObservable, observable} from "mobx";

interface ILoginStore {
    userName: string;
}


export class LoginStore implements ILoginStore {
    @observable userName: string = ""


    constructor() {
        makeObservable(this)
    }

    @action setUserName = (userName: string) => {
        this.userName = userName;
    }
}

export default LoginStore;