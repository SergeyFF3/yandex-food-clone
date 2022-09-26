import { LoginStore } from "./Login";
import { AuthStore } from "./authStore";

export class RootStore {
  loginStore: LoginStore;
  authStore: AuthStore;

  constructor() {
    this.loginStore = new LoginStore();
    this.authStore = new AuthStore();
  }
}

export const createStore = () => {
  return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();
