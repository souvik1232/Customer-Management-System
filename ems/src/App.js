import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import AddUser from "./AddUser/AddUser";
import HomePage from "./HomePage/HomePage";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route exact path='/' Component={Landing} />
          <Route exact path='/userHome' Component={HomePage} />
          <Route exact path='/userHome/addUser' Component={AddUser} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
