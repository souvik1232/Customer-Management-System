import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useEffect, useState } from "react";
import { addEmployee, getEmployees, updateEmployee } from "../Api/api";
import { useStyles } from "./styles";
import image from "../HomePage/object.png";
import { useNavigate } from "react-router-dom";
import CssTextField from "../components/customtextfield";

function AddUserMobile(props) {
  const { row, setToken } = props;
  const [firstname, setFirstname] = useState(row ? row.row.firstname : "");
  const [lastname, setLastname] = useState(row ? row.row.lastname : "");
  const [email, setEmail] = useState(row ? row.row.email : "");
  const [phone, setPhone] = useState(row ? row.row.phone : "");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setId] = React.useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees().then((res) => {
      const tempid = res.data.map((item) => item.empid);
      setId(tempid);
    });
  }, []);

  const emptyField =
    !!firstname && !!lastname && !!email && !!phone && !!password;
  const handleSubmit = (e) => {
    const newid = Math.max(...id) + 1;

    e.preventDefault();
    const employeeObject = {
      id: `${newid}`,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      email: `${email}`,
      phone: `${phone}`,
      password: `${password}`,
    };
    emptyField &&
      addEmployee(employeeObject).then((res) => {
        if (res.data.message === "successful") {
          setSuccess(true);
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setPassword("");
          setId();
        }
      });
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
    emptyField && updateEmployee(employeeObject, row.row.id);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };

  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setToken();
    navigate("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.mobilecontainer}>
      {!props.edit && (
        <div className={classes.HeaderMobile}>
          <Tooltip title='Go Back to Home Page'>
            <Button
              style={{ color: "white" }}
              className={classes.button}
              startIcon={!props.edit && <ArrowBackIosIcon />}
              onClick={() => navigate("/userHome")}
            />
          </Tooltip>
          <img src={image} alt='Company logo' style={{ height: "70%" }}></img>
          <Avatar
            style={{ marginRight: "40px" }}
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            onClick={handleClick}
          />
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClosemenu}
          >
            <MenuItem onClick={handleLogout}>LogOut</MenuItem>
          </Menu>
        </div>
      )}
      <div style={{ padding: "30px 15px" }}>
        <Typography
          style={{ marginTop: "25px" }}
          className={classes.heading}
          variant='h3'
        >
          {props.edit ? "Edit User" : "Add New user"}
        </Typography>
        <div style={{ display: "flex", margin: "30px 0" }}>
          <CssTextField
            id='firstname'
            label='FirstName'
            variant='outlined'
            fullWidth
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <CssTextField
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
            onClick={props.edit ? handleEdit : handleSubmit}
          >
            {props.edit ? "Save" : "Submit"}
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={success}
            autoHideDuration={800}
            onClose={handleClose}
            message='Employee Added'
          />
        </div>
      </div>
    </div>
  );
}

export default AddUserMobile;
