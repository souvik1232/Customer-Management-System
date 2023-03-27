import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import AddUser from "./AddUser/AddUser";
import HomePage from "./HomePage/HomePage";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <ThemeProvider theme={theme}>
        <Landing setToken={setToken} />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/userHome'
            element={<HomePage setToken={setToken} />}
          />
          <Route
            exact
            path='/userHome/addUser'
            element={<AddUser setToken={setToken} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
