import {
  Box,
  Button,
  Link as MLink,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import design from "../styles/designs";
import Head from "next/head";

//FOR THE STYLE
const style = {
  linkStyle: {
    cursor: "pointer",
    color: "#4287f5",
  },
};

//EXPORT
export default function Login() {
  //CONSTANTS
  const router = useRouter();
  const iState = {
    email: "",
    pass: "",
  };

  //FOR THE SNACKBAR
  const iMessage = {
    mes: "",
    severity: "warning",
  };
  const [message, setMessage] = useState(iMessage);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  //FOR THE VARIABLES
  //GETTING INFORMATION FROM THE USER
  const [state, setState] = useState(iState);
  const hChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }));
    console.log(state);
  };

  //CHECKING THE USER INPUTS
  const btnLogin = () => {
    const admin = "admin";
    const adminpassword = "adminpass";

    if (state.email === admin && state.pass === adminpassword) {
      setMessage({
        mes: "Successfully logged in!",
        severity: "success",
      });
      setOpen(true);
      console.log("LOGGED IN SUCCESFULLY");
      router.push("/dashboard");
    } else if (state.email === admin) {
      setMessage({
        mes: "Wrong password",
        severity: "warning",
      });
      setOpen(true);
      console.log("Wrong Password");
    } else if (state.pass === adminpassword) {
      setMessage({
        mes: "Wrong Email/Username",
        severity: "warning",
      });
      setOpen(true);
      console.log("Wrong Email/Username");
    } else {
      setMessage({
        mes: "Wrong Credentials",
        severity: "error",
      });
      setOpen(true);
      console.log("Wrong Credentials");
    }
  };

  //FUNCTION FOR GOING TO THE SIGNUP PAGE
  const gotoSignup = () => {
    router.push("/signup");
  };

  //THE DISPLAY
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: "url(/images/background1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title> Log In </title>
      </Head>
      <Paper
        variant="elevation"
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            opacity: "1",
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: "Oswald" }}>
            Login to Your Account
          </Typography>

          <TextField
            label="Email address"
            placeholder="Email address"
            name="email"
            type="email"
            onChange={hChange("email")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src="/assets/svg/mail.svg"
                    alt="mail"
                    width={20}
                    height={20}
                  />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: "12px" }}
          />
          <TextField
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            onChange={hChange("pass")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src="/assets/svg/password.svg"
                    alt="password"
                    width={20}
                    height={20}
                  />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: "12px" }}
          />
          <Button
            variant="contained"
            sx={{ ...design.button1, marginTop: "12px" }}
            onClick={btnLogin}
          >
            Login
          </Button>
        </Paper>

        <Paper
          variant="elevation"
          sx={{
            padding: "200px 60px",
            backgroundColor: "#30D5C8",
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px",
          }}
        >
          <Typography variant="h3" align="center" sx={{ fontFamily: "Oswald" }}>
            New Here?
          </Typography>

          <Typography
            variant="h7"
            align="center"
            sx={{
              fontFamily: "Sans-serif",
              marginTop: "12px",
              justifyContent: "center",
            }}
          >
            Sign up and discover great <br />
            amount of opportunities
          </Typography>

          <Button
            variant="contained"
            sx={{ ...design.button1, marginTop: "12px" }}
            onClick={gotoSignup}
          >
            Sign Up
          </Button>
        </Paper>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          sx={{ width: "100%" }}
        >
          {message.mes}
        </Alert>
      </Snackbar>
    </Box>
  );
}
