import {
  Box,
  Button,
  Link as MLink,
  Paper,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const style = {
  linkStyle: {
    cursor: "pointer",
    color: "#4287f5",
  },
};

export default function Login() {
  const router = useRouter();
  const iState = {
    email: "",
    pass: "",
  };
  const [state, setState] = useState(iState);

  const gotoSignup = () => {
    router.push("/signup");
  };
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
        <Typography variant="h3" sx={{ fontFamily: "Segoe UI Symbol" }}>
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
        <Button variant="contained" sx={{ marginTop: "12px" }}>
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
    </Box>
  );
}
