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
import React, { useEffect, useState } from "react";
import { addEmployee, getEmployees } from "../Api/api";
import { useStyles } from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import image from "../HomePage/object.png";
import { useNavigate } from "react-router-dom";

function AdduserDesktop(props) {
  const { setToken } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees().then((res) => {
      const tempid = res.data.map((item) => item.empid);
      setId(tempid);
    });
  }, []);

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
    !!firstname &&
      !!lastname &&
      !!email &&
      !!phone &&
      !!password &&
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
    <div className={classes.parent}>
      <div className={classes.Header}>
        <Tooltip title='Go Back to Home Page'>
          <Button
            style={{ color: "white" }}
            className={classes.button}
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate("/userHome")}
          >
            Go Back
          </Button>
        </Tooltip>
        <img src={image} alt='Company logo' style={{ height: "70%" }}></img>
        <Avatar
          style={{ marginRight: "105px" }}
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
          <MenuItem onClick={() => handleLogout()}>LogOut</MenuItem>
        </Menu>
      </div>
      <div className={classes.container}>
        <Typography
          style={{ marginTop: "25px" }}
          className={classes.heading}
          variant='h3'
        >
          Add New User
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
            onClick={handleSubmit}
          >
            Submit
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

export default AdduserDesktop;
