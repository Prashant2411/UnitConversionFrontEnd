import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export default function ButtonAppBar() {
  return (
    <div className="NavBar">
      <AppBar class="AppBar" position="static">
        <Typography variant="h6" id="title">
          <h1>Quantity Measurment</h1>
        </Typography>
      </AppBar>
    </div>
  );
}
