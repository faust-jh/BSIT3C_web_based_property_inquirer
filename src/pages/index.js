import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React from "react";
import design from "../styles/designs";

export default function index() {
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
        <title> Yokuso! </title>
      </Head>
      <AppBar
        sx={{
          height: "11vh",
          bgcolor: "#E8F9FD",
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>

      <img src="/images/1.jpg" alt="qwe" sx={{ ...design.img1 }} />
    </Box>
  );
}
