import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

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
  }

  //GETTING THE USER INPUT
  const [state, setState] = useState(iState);
  const hChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }))
    console.log(state);
  };

  //FOR THE SNACKBAR 
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  //VERIFYING USER INPUT
  const btnCreate = () => {
    if(state.pass === "" && state.pass === "" && state.conpass === "")
    {
      setMessage("Please fill up the fields!");
      setOpen(true);
      console.log("Please fill up the fields");
    }
    else if (state.email === "")
    {
      setMessage("Please enter email/username");
      setOpen(true);
      console.log("Please enter email/username");
    }
    else if(state.pass === "")
    {
      setMessage("Please enter password");
      setOpen(true);
      console.log("Please enter password");
    }
    else if(state.conpass === "")
    {
      setMessage("Please confirm your password");
      setOpen(true);
      console.log("Please confirm your password");
    }
    else if(state.pass === state.conpass)
    {
      setMessage("Account created successfully!");
      setOpen(true);
      setMessage
      console.log("Account created successfully!");
      router.push("/login");
    }
    else
    {
      setMessage("Password did not match!");
      setOpen(true);
      console.log("Password did not match!");
    }
  }
  
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
      <Box>
        <Typography variant="h2" sx={{ fontFamily: "Segoe UI Symbol" }}>
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
          onChange = {hChange("email")}
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
        <Button variant="contained" sx={{ marginTop: "12px" }} onClick = {btnCreate}>
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

      
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center"}}
        open={open}
        onClose={handleClose}
        message={message}
      />
    </Box>
  );
}
