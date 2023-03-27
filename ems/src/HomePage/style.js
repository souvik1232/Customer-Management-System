import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  parent: {
    minHeight: "100vh",
  },
  container: {
    maxHeight: "440px",
    margin: "0 100px",
  },
  Header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between ",
    backgroundImage:
      "linear-gradient(to right, #0e88f1, #4481eb, #0e88f1, #3f86ed)",
    marginBottom: "35px",
    height: "70px",
  },
  containerMobile: {
    maxHeight: "440px",
    margin: "0 30px",
    minWidth: "300px",
  },
  HeaderMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between ",
    backgroundImage:
      "linear-gradient(to right, #0e88f1, #4481eb, #0e88f1, #3f86ed)",
    backgroundColor: "cyan",
    marginBottom: "40px",
    height: "65px",
  },
  button: {
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#0e88f1",
    color: "white",
    border: "none",
    backgroundSize: " 300% 100%",
    bordeRadius: "50px",
    outline: "none",
    textTransform: " uppercase",
    "&:hover": {
      backgroundColor: "#0e88f1",
    },
  },
});
