import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function index() {
  const router = useRouter();

  //VALUE FOR CLICK
  const [value, setValue] = useState();

  //GOING TO LOGIN FORM
  const gotoLogin = () => {
    router.push("/login");
  };
  return (
    <Box display="flex">
      <Box>
        <Head>
          <title> Yokuso! </title>
        </Head>
        <React.Fragment>
          <AppBar>
            <Toolbar>
              <Box
                sx={{
                  paddingLeft: "20px",
                  paddingTop: "5px",
                }}
              >
                <Image
                  src="/images/Logo.png"
                  alt="logo"
                  height={60}
                  width={60}
                />
              </Box>

              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                display="flex"
                alignItems="center"
                sx={{ marginLeft: "auto" }}
              >
                <Tab label="Home" />
                <Tab label="Services" />
                <Tab label="Contact Us" />
                <Tab label="About Us" />
              </Tabs>

              <Button
                variant="contained"
                sx={{
                  marginLeft: "3%",
                  marginRight: "3%",
                  backgroundColor: "white",
                  width: "150px",
                  fontFamily: "Gentium Plus",
                  fontWeight: "bold",
                }}
                onClick={gotoLogin}
              >
                Log In
              </Button>
            </Toolbar>
          </AppBar>
        </React.Fragment>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url(/images/Front.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
