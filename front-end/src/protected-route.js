import React from "react";
import cookie from 'js-cookie'
import { Route, Redirect } from "react-router-dom";
import { useStores } from "./useStore";

export const ProtectedRoute = ({ ...props }) => {
    const { loginStore } = useStores()
    const loggedIn = cookie.get('isloggedIn');
    return loggedIn ? <Route {...props} /> : <Redirect to="/login" />
}
