import React from "react";
import Admin from "../components/Admin";
import { Box } from "@mui/system";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Image from "next/Image";
import design from "../styles/designs";
import Head from "next/head";

export default function Documents() {
  const style = {
    TopDeals: {
      padding: "20px",
      borderRadius: "20px",
    },
    BoxLogo: {
      paddingTop: "40px",
      paddingBottom: "30px",
      paddingLeft: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      marginBottom: "20px",
      borderRadius: "20px",
    },
    BoxImage: {
      paddingTop: "10px",
    },
    BoxText: {
      background: "white",
      padding: "20px",
      fontWeight: "bold",
    },
    BoxSales: {
      paddingTop: "13px",
    },
    Text: {
      fontWeight: "bold",
      fontFamily: "Gentium Plus",
      fontSize: "30px",
    },
    Text2: {
      paddingLeft: "20px",
      fontFamily: "Gentium Plus",
      fontSize: "20px",
      marginRight: "auto",
    },
    Title: {
      color: "black",
      fontSize: "30px",
      paddingLeft: "20px",
      fontWeight: "bold",
      fontFamily: "Gentium Plus",
    },
    sale: {
      alignItems: "center",
      textAlign: "center",
      fontWeight: "bold",
    },
  };
  return (
    <Box sx={{ padding: "0 24px", paddingBottom: "50px" }}>
      <Box sx={style.BoxLogo} display="flex">
        <Image
          src="/assets/svg/settings.svg"
          alt="password"
          width={40}
          height={40}
        />
        <Head>
          <title>Woodlands - Settings</title>
        </Head>
        <Typography sx={style.Title}>Settings</Typography>
      </Box>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/settings.svg"
                alt="settings"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                General
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/user.svg"
                alt="password"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                Personal Information
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/password.svg"
                alt="password"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                Privacy
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/security.svg"
                alt="password"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                Security and Login
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/address.svg"
                alt="address"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                Location
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/language.svg"
                alt="language"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                Languange and Region
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/support.svg"
                alt="support"
                width={30}
                height={30}
              />
              <Typography variant="h6" sx={style.Text2}>
                Support Inbox
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="more"
                width={30}
                height={30}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

Documents.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
