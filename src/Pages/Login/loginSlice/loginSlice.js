import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogined: false,
  emailValue: "",
  passwordValue: "",
  email: ["james@gmail.com"],
  password: ["12345A"],
  foundPassword: "",
};

export const Login = createSlice({
  name: "login",
  initialState,
  reducers: {
    signIN: (state) => {
      const indexEmail = state.email.indexOf(state.emailValue);
      if (state.password[indexEmail] === state.passwordValue) {
        state.isLogined = true;
        state.emailValue = "";
        state.passwordValue = "";
      } else {
        alert("Login or password is wrong");
      }
    },
    inputEmail: (state, action) => {
      state.emailValue = action.payload;
    },
    inputPassword: (state, action) => {
      state.passwordValue = action.payload;
    },
    forgotPassword: (state) => {
      const emailIndex = state.email.indexOf(state.emailValue);
      if (emailIndex === -1) {
        state.emailValue = "";
        alert("This account does not exist");
      } else {
        state.foundPassword = state.password[emailIndex];
      }
    },
    EmptyForgot: (state) => {
      state.emailValue = "";
      state.foundPassword = "";
    },
    editInput: (state, action) => {
      state.editValue = action.payload;
    },
    isNotLogined: (state) => {
      state.isLogined = false;
    },
    registration:(state)=>{
      const emailIndex = state.email.indexOf(state.emailValue);
      if(state.emailValue.trim() === "" && state.passwordValue.trim() === ""){
      alert("you can't register empty fileds!")
      }
      if(emailIndex === -1 && state.emailValue.trim() !== "" && state.passwordValue.trim() !== ""){
        state.email.push(state.emailValue)
        state.password.push(state.passwordValue)
        state.emailValue = "";
        state.passwordValue = "";
        alert("Your registration is successfully done!")
      }
      if(emailIndex !== -1 ){
        alert("account has already exist")
        state.emailValue = "";
        state.passwordValue = "";
      }
    },
    EmptyFields:(state)=>{
      state.emailValue = "";
      state.passwordValue = "";
    }
  },
});
export const {
  signIN,
  inputEmail,
  inputPassword,
  forgotInput,
  forgotPassword,
  EmptyForgot,
  isNotLogined,
  registration,
   EmptyFields} = Login.actions;

export default Login.reducer;
