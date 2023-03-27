import { TextField, withStyles } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#0e88f1",
    },
  },
})(TextField);
export default CssTextField;
