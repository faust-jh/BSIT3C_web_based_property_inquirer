import React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  AppBar,
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

//EXPORT
export default function Admin({ children }) {
  const router = useRouter();
  //CONSTANTS
  const [open, setOpen] = useState(false);

  //To Open the Drawer
  const setDrawerOpen = () => {
    setOpen(true);
  };

  //To Close the Drawer
  const handleClose = () => {
    setOpen(false);
  };

  const drawerClose = (url) => {
    setOpen(false);
    router.push(url);
  };

  //THE DISPLAY
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <Head>
        <title> Dashboard </title>
      </Head>
      <AppBar>
        <Toolbar>
          <IconButton onClick={setDrawerOpen}>
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
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            minWidth: "200px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List sx={{ marginTop: "55px", flexGrow: 1 }}>
            <Divider />

            <ListItem
              button
              onClick={() => drawerClose("/dashboard")}
              selected={router.pathname.includes("/dashboard")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/dashboard.svg"
                  alt="dashboard"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <Divider />

            <ListItem
              button
              onClick={() => drawerClose("/deals")}
              selected={router.pathname.includes("/deals")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/deals.svg"
                  alt="deals"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Deals" />
            </ListItem>

            <ListItem
              button
              onClick={() => drawerClose("/properties")}
              selected={router.pathname.includes("/properties")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/property.svg"
                  alt="property"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Properties" />
            </ListItem>
            <ListItem
              button
              onClick={() => drawerClose("/loans")}
              selected={router.pathname.includes("/loans")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/loan.svg"
                  alt="loan"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Loans" />
            </ListItem>
            <ListItem
              button
              onClick={() => drawerClose("/document")}
              selected={router.pathname.includes("/document")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/document.svg"
                  alt="document"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItem>

            <Divider />

            <ListItem
              button
              onClick={() => drawerClose("/settings")}
              selected={router.pathname.includes("/settings")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/settings.svg"
                  alt="settings"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/signout.svg"
                  alt="signout"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box margin="90px">{children}</Box>
    </Box>
  );
}
