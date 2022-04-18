import React from 'react'
import Head from "next/head";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
 



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
            
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}
