import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  parent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between ",
    backgroundImage:
      "linear-gradient(to right, #0e88f1, #4481eb, #0e88f1, #3f86ed)",
    marginBottom: "35px",
    height: "70px",
    width: "100%",
  },
  container: {
    height: "700px",
    width: "650px",
    borderRadius: "10px",
    border: "1px solid  #939393",
  },
  heading: {
    color: "black",
  },
  submit: {
    width: "250px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    margin: "20px",
    height: "55px",
    textAlign: "center",
    border: "none",
    backgroundSize: " 300% 100%",
    bordeRadius: "50px",
    // transition: "all .4s ease-in-out",
    outline: "none",
    backgroundColor: "#0e88f1",
    textTransform: " uppercase",
    "&:hover": {
      backgroundColor: "#0e88f1",
    },
  },

  mobilecontainer: {
    minWidth: "250px",
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
});
