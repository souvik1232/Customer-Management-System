import { Button, Snackbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { updateEmployee } from "../Api/api";
import CssTextField from "../components/customtextfield";
import { useStyles } from "./style";

function EditUser(props) {
  const { row, setRender, render, toggleDrawer } = props;
  const [firstname, setFirstname] = useState(row ? row.row.firstname : "");
  const [lastname, setLastname] = useState(row ? row.row.lastname : "");
  const [email, setEmail] = useState(row ? row.row.email : "");
  const [phone, setPhone] = useState(row ? row.row.phone : "");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = React.useState(false);
  const [snackmessage, setSnackmessage] = useState("");
  const classes = useStyles();

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let employeeObject = {
      id: `${row.row.id}`,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      email: `${email}`,
      phone: `${phone}`,
      password: `${password}`,
    };

    if (!firstname || !lastname || !email || !phone || !password) {
      setSuccess(true);
      setSnackmessage("Fields can't be left empty");
    }
    // console.log(!!firstname && !!lastname && !!email && !!phone && !!password);
    if (!!firstname && !!lastname && !!email && !!phone && !!password) {
      updateEmployee(employeeObject, row.row.id);
      setSuccess(true);
      setRender(!render);
      toggleDrawer(false);
    }
  };
  return (
    <div className={classes.container}>
      <Typography
        style={{ margin: "20px 0 20px 0", alignSelf: "center" }}
        className={classes.heading}
        variant='h3'
      >
        Edit User
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "",
          marginBottom: "30px",
        }}
      >
        <CssTextField
          style={{ margin: "20px 25px" }}
          id='firstname'
          label='FirstName'
          variant='outlined'
          fullWidth
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <CssTextField
          style={{ margin: "20px 25px" }}
          id='lastname'
          label='LastName'
          variant='outlined'
          fullWidth
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <CssTextField
          style={{ margin: "20px 25px" }}
          id='email'
          label='Email'
          variant='outlined'
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <CssTextField
          style={{ margin: "20px 25px 20px 25px" }}
          id='phone'
          label='Phone Number'
          variant='outlined'
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <CssTextField
          style={{ margin: "20px 25px" }}
          id='password'
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Button
          variant='contained'
          className={classes.submit}
          onClick={handleEdit}
        >
          Save
        </Button>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={success}
          autoHideDuration={800}
          onClose={handleSnackClose}
          message={snackmessage}
        />
      </div>
    </div>
  );
}

export default EditUser;
