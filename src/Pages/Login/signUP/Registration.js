import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { inputEmail,inputPassword,EmptyFields,registration} from "../functions/Functions";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Paper from "@mui/material/Paper";
import VerifiedIcon from '@mui/icons-material/Verified';
const Registration =()=>{
    const dispatch = useDispatch();
  const emailValue = useSelector((state) => state.login.emailValue);
  const password = useSelector((state) => state.login.passwordValue);

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
        <TextField
          style={{
            width: "500px",
            marginBottom: "20px",
          }}
          id="demo-helper-text-misaligned-no-helper"
          label="Your password"
          value={password}
          onChange={(event) => {
            dispatch(inputPassword(event.target.value));
          }}
        />
        <Button
          variant="outlined"
          startIcon={<VerifiedIcon />}
          onClick={() => dispatch(registration())}
        >
          Register
        </Button>
        <Link to="/login" onClick={() => dispatch(EmptyFields())} style={{ marginTop: "20px" }}>
          <Button startIcon={<ArrowBackIcon />}>Back to login page</Button>
        </Link>
      </Paper>
    </div>
  );
}
export default Registration


