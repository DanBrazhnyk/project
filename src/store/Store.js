import { configureStore } from "@reduxjs/toolkit";
import methodsReducer from "../todo_list/todoSlice/todoSlice";
import loginReducer from "../Pages/Login/loginSlice/loginSlice"
import usersReducer from "../list_users/userSlice/userSlice"

export const store = configureStore({
  reducer: {
    methods: methodsReducer,
    login: loginReducer,
    users: usersReducer
  },
});
