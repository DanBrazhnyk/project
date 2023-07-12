import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { isNotLogined } from "./Login/loginSlice/loginSlice";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(isNotLogined());
    navigate("/login");
  };

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
            variant="outlined"
            sx={{
              backgroundColor: "#9400D3",
              borderRadius: "10px",
              color: "#ffffffff",
              textDecoration: "none",
            }}
            component={NavLink}
            to="/"
            isActive={(match, location) => location.pathname === "/" || location.pathname === "/home"}
          >
            Home
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#9400D3",
              borderRadius: "10px",
              color: "#ffffffff",
              textDecoration: "none",
            }}
            component={Link}
            to="/todo_list"
          >
            todo_list
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#9400D3",
              borderRadius: "10px",
              color: "#ffffffff",
              textDecoration: "none",
            }}
            component={Link}
            to="/Voting"
          >
            Voting
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#9400D3",
              borderRadius: "10px",
              color: "#ffffffff",
              textDecoration: "none",
            }}
            component={Link}
            to="/UserList"
          >
            UserList
          </Button>
        </div>
        <div style={{ marginRight: "17px" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#9400D3",
              borderRadius: "10px",
              color: "#ffffffff",
              textDecoration: "none",
            }}
            component={Link}
            to="/Contacts"
          >
            Contacts
          </Button>
        </div>
        <div style={{ marginLeft: "400px", marginRight: "20px" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#9400D3",
              borderRadius: "10px",
              color: "#ffffffff",
              textDecoration: "none",
            }}
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainMenu;