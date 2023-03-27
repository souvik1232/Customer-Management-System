import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: "100vh",
  },
  login: {
    minHeight: "500px",
    minWidth: "450px",
    border: "1px solid #939393",
    borderRadius: "5%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    marginLeft: "90px",
  },
  mobilelogin: {
    borderRadius: "5%",
    width: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
  },
  heading: {
    color: "black",
  },
  textArea: {
    margin: "20px 15px !important",
  },
  loginbtn: {
    marginTop: "100px",
    maxWidth: "150px",
    marginLeft: "15px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#0e88f1",
    color: "white",
    border: "none",
    backgroundSize: " 300% 100%",
    bordeRadius: "50px",
    transition: "all .4s ease-in-out",
    outline: "none",
    textTransform: " uppercase",
    "&:hover": {
      backgroundColor: "#0e88f1",
    },
  },
});
