import { action, observable, flow, decorate } from 'mobx';

class LoginStore {
    userData = {};
    isLoggedIn = false;
    logIn = flow(function* ({ userName, password }, successHandler, errorHandler) {
        try {
            const qparams = new URLSearchParams({ userName, password }).toString()
            const response = yield fetch(`http://localhost:2000/users?${qparams}`);
            const data = yield response.json();
            this.onSuccess(data, successHandler, errorHandler);
        } catch (error) {
            this.onError(error, errorHandler);
        }
    });

    onSuccess(data, successHandler, errorHandler) {
        this.userData = data;
        this.isLoggedIn = data.length > 0;
        this.isLoggedIn ? successHandler() : errorHandler();
    }

    onError(error, errorHandler) {
        this.isLoggedIn = false;
        errorHandler();
    }
}

decorate(LoginStore, {
    userData: observable,
    isLoggedIn: observable,
    logIn: action,
    onSuccess: action,
    onError: action
})

export default LoginStore;