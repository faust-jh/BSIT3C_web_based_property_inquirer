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
//import { View, Image } from "react-native";

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
              <Typography>MUST BE THE LOGO</Typography>

              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                display="flex"
                alignItems="center"
                sx={{ marginLeft: "auto" }}
                color="#F7CCAC"
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
        <img
          src="/images/7.jpg"
          alt=""
          sx={{ position: "absolute" }}
          height={550}
          width={"80%"}
          flex={1}
        ></img>
      </Box>
    </Box>
  );
}
