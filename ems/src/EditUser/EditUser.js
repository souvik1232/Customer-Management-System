import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { updateEmployee } from "../Api/api";
import { useStyles } from "./style";

function EditUser(props) {
  const { row, setRender, render, toggleDrawer } = props;
  const [firstname, setFirstname] = useState(row ? row.row.firstname : "");
  const [lastname, setLastname] = useState(row ? row.row.lastname : "");
  const [email, setEmail] = useState(row ? row.row.email : "");
  const [phone, setPhone] = useState(row ? row.row.phone : "");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleEdit = () => {
    let employeeObject = {
      id: `${row.row.id}`,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      email: `${email}`,
      phone: `${phone}`,
      password: `${password}`,
    };
    updateEmployee(employeeObject, row.row.id);
    setRender(!render);
    toggleDrawer(false);
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
        <TextField
          style={{ margin: "20px 25px" }}
          id='firstname'
          label='FirstName'
          variant='outlined'
          fullWidth
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
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
        <TextField
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
        <TextField
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
        <TextField
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
      </div>
    </div>
  );
}

export default EditUser;
