import { createContext } from 'react';
import LoginStore from "./login-store";
import PostStore from './posts-store';

class AppStore {
    constructor() {
        this.loginStore = new LoginStore();
        this.postStore = new PostStore();
    }
}

const store = new AppStore();
export const storesContext = createContext(store);