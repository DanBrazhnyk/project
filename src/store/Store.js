import { configureStore } from "@reduxjs/toolkit";
import methodsReducer from "../todo_list/functions/Functions";
import loginReducer from "../Pages/Login/functions/Functions"

export const store = configureStore({
  reducer: {
    methods: methodsReducer,
    login: loginReducer
  },
});
