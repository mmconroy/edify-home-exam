import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="end" color="inherit" aria-label="menu"></IconButton>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            HOME
          </Link>
          <Typography style={{ position: "fixed", top: "18px", left: "75%" }}>
            Directory
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
