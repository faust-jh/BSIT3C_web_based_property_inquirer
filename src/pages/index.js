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

        <img src="/images/7.jpg" alt="" height={650} width={"100%"} flex={1} />
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>qweqwe</Typography>
        </Paper>
      </Box>
    </Box>
  );
}
