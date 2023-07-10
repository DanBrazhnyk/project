import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {isNotLogined} from "./Login/functions/Functions";
import { useNavigate } from "react-router-dom";
const MainMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(isNotLogined());
    navigate("/login")
  }

  return (
    <div
      style={{
        margin: 0,
        backgroundColor: "#F3E5AB",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#0ABAB5",
          display: "flex",
          justifyContent: "flex-start",
          height: "100px",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "10px", marginRight: "auto" }}>
          <Button
            style={{ backgroundColor: "#9400D3", borderRadius: "10px" }}
            variant="outlined"
          >
            <Link style={{ color: "#ffffffff", textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            style={{ backgroundColor: "#9400D3", borderRadius: "10px" }}
            variant="outlined"
          >
            <Link
              style={{ color: "#ffffffff", textDecoration: "none" }}
              to="/todo_list"
            >
              todo_list
            </Link>
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            style={{ backgroundColor: "#9400D3", borderRadius: "10px" }}
            variant="outlined"
          >
            <Link
              style={{ color: "#ffffffff", textDecoration: "none" }}
              to="/Voting"
            >
              Voting
            </Link>
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            style={{ backgroundColor: "#9400D3", borderRadius: "10px" }}
            variant="outlined"
          >
            <Link
              style={{ color: "#ffffffff", textDecoration: "none" }}
              to="/UserList"
            >
              UserList
            </Link>
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            style={{ backgroundColor: "#9400D3", borderRadius: "10px" }}
            variant="outlined"
          >
            <Link
              style={{ color: "#ffffffff", textDecoration: "none" }}
              to="/Contacts"
            >
              Contacts
            </Link>
          </Button>
        </div>
        <div style={{ marginLeft: "400px", marginRight: "20px" }}>
          <Button
            style={{ backgroundColor: "#9400D3", borderRadius: "10px" }}
            variant="outlined"
            onClick={()=>{handleLogOut()}}
          >
            <Link
              style={{ color: "#ffffffff", textDecoration: "none" }}
            >
              Logout
            </Link>
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainMenu;
