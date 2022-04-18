import {
  Box,
  Button,
  Link as MLink,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import design from "../styles/designs";

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
  const [message, setMessage] = useState("");
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
    }))
    console.log(state);
  };

  //CHECKING THE USER INPUTS
  const btnLogin = () => {
    const admin = "admin";
    const adminpassword = "adminpass";

    if(state.email === admin && state.pass === adminpassword)
    {
      setMessage("Successfully logged in!");
      setOpen(true);
      console.log("LOGGED IN SUCCESFULLY");
      router.push("/dashboard");
    }
    else if(state.email === admin)
    {
      setMessage("Wrong Password");
      setOpen(true);
      console.log("Wrong Password");
    }
    else if(state.pass === adminpassword)
    {
      setMessage("Wrong Email/Username");
      setOpen(true);
      console.log("Wrong Email/Username");
    }
    else 
    {
      setMessage("Wrong Credentials");
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontFamily: "Oswald" }}>
          Login to Your Account
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
                  alt="password"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            ),
          }}
          sx={{ marginTop: "12px" }}
        />
        <Button variant="contained" sx={{ ...design.button1, marginTop: "12px" }} onClick={btnLogin}>
          Login
        </Button>

        <Box
          sx={{ display: "flex", justifyContent: "right", marginTop: "12px" }}
        >
          <Typography
            variant="subtitle2"
            onClick={gotoSignup}
            sx={style.linkStyle}
          >
            Create new account
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
        open={open}
        onClose={handleClose}
        message={message}
      />
    </Box>
  );
}
