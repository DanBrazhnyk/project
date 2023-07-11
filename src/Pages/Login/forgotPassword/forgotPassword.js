import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { EmptyForgot, inputEmail, forgotPassword } from "../loginSlice/loginSlice";
import { Link } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Paper from "@mui/material/Paper";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const emailValue = useSelector((state) => state.login.emailValue);
  const password = useSelector((state) => state.login.foundPassword);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            width: "400px",
            marginBottom: "20px",
          }}
          component="h1"
          variant="h5"
        >
          If you forgot your password, please write your email, which is registered on this website. After finding your email in our database, we'll show you the password.
        </Typography>
        <TextField
          style={{
            width: "500px",
            marginBottom: "20px",
          }}
          id="demo-helper-text-misaligned-no-helper"
          label="Your email"
          value={emailValue}
          onChange={(event) => {
            dispatch(inputEmail(event.target.value));
          }}
        />
        <Button
          variant="outlined"
          startIcon={<LockOpenIcon />}
          onClick={() => dispatch(forgotPassword())}
        >
          Show password
        </Button>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "20px",
          }}
          component="h1"
          variant="h5"
        >
          Your password: {password}
        </Typography>
        <Link to="/login" onClick={() => dispatch(EmptyForgot())} style={{ marginTop: "20px" }}>
          <Button startIcon={<ArrowBackIcon />}>Back to login page</Button>
        </Link>
      </Paper>
    </div>
  );
};

export default ForgotPassword;
