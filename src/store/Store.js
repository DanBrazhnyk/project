import { configureStore } from "@reduxjs/toolkit";
import methodsReducer from "../slice/todoSlice/TodoSlice";
import loginReducer from "../slice/loginSlice/LoginSlice"
import usersReducer from "../slice/userSlice/UserSlice"

export const store = configureStore({
  reducer: {
    methods: methodsReducer,
    login: loginReducer,
    users: usersReducer
  },
});
