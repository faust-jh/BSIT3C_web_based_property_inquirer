import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";

//EXPORT
export default function dashboard() {
  //RETURN
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
        <title> Dashboard </title>
      </Head>
      <AppBar>
        <Toolbar>
          <IconButton>
            <Image
              src="/assets/svg/option.svg"
              alt="options"
              height={25}
              width={25}
            />
          </IconButton>
          <Typography
            variant="h5"
            marginLeft="30px"
            sx={{ fontFamily: "Oswald" }}
          >
            {" "}
            Welcome to Property Inquirer!{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} variant="permanent" open={true}></Drawer>
    </Box>
  );
}
