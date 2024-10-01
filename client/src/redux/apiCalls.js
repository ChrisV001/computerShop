import {loginFailure, loginFaliure, loginStart, loginSuccess} from "./userRedux";
import {publicRequest, userRequest} from "../requestMethod";
import {addProductFailure, addProductStart, addProductSuccess} from "./productRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}