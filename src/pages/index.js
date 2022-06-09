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
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "70px",
          justifyContent: "center",
        }}
      >
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
                color="#89f7f"
              >
                <Tab label="Home" />
                <Tab label="Services" />
                <Tab label="Contact Us" />
                <Tab label="About Us" />
              </Tabs>

              <Button
                variant="contained"
                sx={{ marginLeft: "3%", marginRight: "3%" }}
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
            height: "89.3vh",
            backgroundImage: "url(/images/background1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
