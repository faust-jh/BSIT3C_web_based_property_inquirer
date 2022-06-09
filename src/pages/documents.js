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
      fontFamily: "Gentium Plus",
      fontSize: "15px",
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
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={style.BoxLogo} display="flex">
        <Image
          src="/assets/svg/document.svg"
          alt="password"
          width={40}
          height={40}
        />
        <Typography sx={style.Title}>Documents</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Letter of intent
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Reservation Agreement
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Contract to sell
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Letter of Guarantee
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Deed of Abosulute Sale
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Certificate Title
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Tax Declaration
            </Typography>
            <Typography variant="h6" sx={style.Text2}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              variant="contained"
              sx={{ ...design.button2, marginTop: "12px", marginRight: "12px" }}
            >
              <Typography sx={{ marginRight: "10px" }}>
                Download File
              </Typography>
              <Image
                src="/assets/svg/download.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

Documents.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
