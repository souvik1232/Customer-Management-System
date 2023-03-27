import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255, 255, 255)",
    height: "700px",
    width: "650px",
    borderRadius: "10px",
    paddingTop: "50px",
  },
  heading: {
    color: "black",
    fontFamily: "Poppins,sans-serif",
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
    outline: "none",
    textTransform: " uppercase",
    backgroundColor: "#0e88f1",
    "&:hover": {
      backgroundColor: "#0e88f1",
    },
    // "&:hover": {
    //   backgroundPosition: "100% 0",
    //   // -o-transition: all .4s ease-in-out
    //   // -webkit-transition: all .4s ease-in-out;
    //   transition: "all .4s ease-in-out",
    // },
  },
});
