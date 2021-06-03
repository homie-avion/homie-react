import { useReducer, useEffect } from "react";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import { SET_USER, SET_USER_PREFERENCES, SET_LOADING, SET_MESSAGE } from "../types";

import url from "../url";

const UserState = (props) => {
  const initialState = {
    user: {},
    preferences: {},
    token: null,
    isLoading: false,
    message: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState, () => {
    const tokenLocal = localStorage.getItem("token");
    return tokenLocal
      ? { ...initialState, token: JSON.parse(tokenLocal) }
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
    // eslint-disable-next-line
  }, [state.token]);

  useEffect(() => {
    if (state.token) {
      autoLogin(state.token);
      console.log("getting user info");
    }
    // eslint-disable-next-line
  }, []);

  const logInUser = async (data, cb) => {
    setIsLoading();
    // console.log(process.env.NODE_ENV)
    // console.log("login function");
    // console.log(data);

    let res;
    try {
      res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    // console.log(res.status);
    // console.log(result);

    const { status, message } = result;
    // console.log(status ,message)

    if (res.status === 200) {
      dispatch({
        type: SET_USER,
        payload: { data: result.data, token: result.token },
      });
    }

    setMessage({ status, message });

    cb({ status, message }, res.status);
  };

  const signUpUser = async (data, cb) => {
    setIsLoading();

    // console.log("signup function");
    // console.log(data);

    let res;
    try {
      res = await fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    const { status, message } = result;
    // console.log(res.status);
    // console.log(result);

    dispatch({
      type: SET_USER,
      payload: result.data ? { data: result.data, token: result.token } : null,
    });

    setMessage({ status, message });

    cb({ status, message }, res.status);
  };

  const autoLogin = async (token) => {
    setIsLoading();

    let res;
    try {
      res = await fetch(`${url}/auto_login`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();

    dispatch({
      type: SET_USER,
      payload: result.data ? { data: result.data, token: token } : null,
    });
  };

  const logOutUser = (cb, status_message) => {
    setIsLoading();

    dispatch({
      type: SET_USER,
      payload: { data: {user: null, preferences:null }, token: null },
    });
    // reroute to home

    dispatch({
      type: SET_MESSAGE,
      payload: status_message,
    });

    cb(status_message, 200);
  };

  const updateUserAccount = async (data, token, cb) => {
    setIsLoading();
    let res;
    try {
      res = await fetch(`${url}/user`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    const { status, message } = result;

    console.log(res.status);

    if (res.status === 200) {
      console.log("User's information were updated.");
      dispatch({
        type: SET_USER,
        payload: { data:{ user: result.data }, token: token },
      });
      console.log(result.data);
    }

    dispatch({
      type: SET_MESSAGE,
      payload: { status, message },
    });

    cb({ status, message }, res.status );
  };

  const updateUserPreferences = async (data, token, cb) =>{
    setIsLoading();
    let res;
    try {
      res = await fetch(`${url}/update_preferences`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    const { status, message } = result;

    console.log(result.data);

    if (res.status === 200) {
      console.log("update_preferences's information were updated.");
      dispatch({
        type: SET_USER_PREFERENCES,
        payload: result.data,
      });
      console.log(result.data);
    }

    dispatch({
      type: SET_MESSAGE,
      payload: { status, message },
    });

    cb({ status, message }, res.status );
  }

  const deleteUserAccount = async (token, cb) => {
    setIsLoading();
    let res;
    try {
      const status_message = {
        status: "Success",
        message: "User account deleted.",
      };

      logOutUser(cb, status_message);

      res = await fetch(`${url}/user`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }

    if (res.status !== 200) {
      const status_message = {
        status: "Error",
        message: "User account deletion failed.",
      };

      dispatch({
        type: SET_MESSAGE,
        payload: status_message,
      });

      cb(status_message, res.status);
    }
  };

  const setMessage = (data) => {
    dispatch({ type: SET_MESSAGE, payload: data });
  };

  // set loading to true
  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const clearMessage = () => {
    dispatch({ type: SET_MESSAGE, payload: null });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        preferences:state.preferences,
        token: state.token,
        isLoading: state.isLoading,
        message: state.message,
        logInUser,
        signUpUser,
        autoLogin,
        logOutUser,
        updateUserAccount,
        updateUserPreferences,
        deleteUserAccount,
        setIsLoading,
        clearMessage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
