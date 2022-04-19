import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import design from "../styles/designs";
import Head from "next/head";
import Image from "next/image";

//FOR THE STYLE
const style = {
  linkStyle: {
    cursor: "pointer",
    color: "#4287f5",
  },
};

//EXPORT
export default function Signup() {
  //CONSTANTS
  const router = useRouter();
  const iState = {
    email: "",
    pass: "",
    conpass: "",
  };

  //GETTING THE USER INPUT
  const [state, setState] = useState(iState);
  const hChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }));
    console.log(state);
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

  //VERIFYING USER INPUT
  const btnCreate = () => {
    if (state.pass === "" && state.pass === "" && state.conpass === "") {
      setMessage({
        mes: "Please fill up the fields",
        severity: "warning",
      });
      setOpen(true);
      console.log("Please fill up the fields");
    } else if (state.email === "") {
      setMessage({
        mes: "Please enter email/username",
        severity: "warning",
      });
      setOpen(true);
      console.log("Please enter email/username");
    } else if (state.pass === "") {
      setMessage({
        mes: "Please enter password",
        severity: "warning",
      });
      setOpen(true);
      console.log("Please enter password");
    } else if (state.conpass === "") {
      setMessage({
        mes: "Please confirm your password",
        severity: "warning",
      });
      setOpen(true);
      console.log("Please confirm your password");
    } else if (state.pass === state.conpass) {
      setMessage({
        mes: "Account created successfully!",
        severity: "success",
      });
      setOpen(true);
      setMessage;
      console.log("Account created successfully!");
      router.push("/login");
    } else {
      setMessage({
        mes: "Password did not match!",
        severity: "error",
      });
      setOpen(true);
      console.log("Password did not match!");
    }
  };

  //RETURN TYPE
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title> Register </title>
      </Head>

      <Box>
        <Typography variant="h4" sx={{ fontFamily: "Oswald" }}>
          Create New Account
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          marginTop: "12px",
        }}
      >
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
          label="Confirm Password"
          placeholder="Confirm Password"
          name="Confirm password"
          type="password"
          onChange={hChange("conpass")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/assets/svg/confirmpassword.svg"
                  alt="mail"
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
          onClick={btnCreate}
        >
          Create
        </Button>

        <Box
          sx={{ display: "flex", justifyContent: "right", marginTop: "12px" }}
        >
          <Typography
            variant="subtitle2"
            onClick={() => router.push("/login")}
            sx={style.linkStyle}
          >
            Already have an account? Please Sign In
          </Typography>
        </Box>
      </Paper>
      <img src=".images/background1.jpg" alt="" />

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={5000}
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
