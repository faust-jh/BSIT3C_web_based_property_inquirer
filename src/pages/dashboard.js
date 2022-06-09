import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Admin from "../components/Admin";
import Image from "next/image";

export default function Dashboard() {
  const style = {
    TopDeals: {
      padding: "15px",
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
      fontFamily: "",
      borderRadius: "20px",
    },
    BoxSales: {
      paddingTop: "13px",
    },
    Text: {
      fontWeight: "bold",
      fontFamily: "Gentium Plus",
    },
    Title: {
      color: "black",
      fontSize: "30px",
      paddingLeft: "20px",
      fontWeight: "bold",
      fontFamily: "Gentium Plus",
    },
    Text2: {
      fontFamily: "Gentium Plus",
      fontSize: "20px",
    },
  };
  return (
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={style.BoxLogo} display="flex">
        <Image
          src="/assets/svg/dashboard.svg"
          alt="password"
          width={40}
          height={40}
        />
        <Typography sx={style.Title}>Dashboard</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Deals
            </Typography>
            <Box sx={style.BoxImage}>
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Box>
            <Typography variant="h7">(24.7k Review)</Typography>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Properties
            </Typography>
            <Box sx={style.BoxImage}>
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Box>
            <Typography variant="h7">(45.3k Review)</Typography>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Typography variant="h6" sx={style.Text}>
              Loans
            </Typography>
            <Box sx={style.BoxImage}>
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Image
                src="/assets/svg/stars.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Box>
            <Typography variant="h7">(35.9k Review)</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ padding: "26.5px" }}>
        <Grid container spacing={3}>
          <Grid item sm>
            <Box sx={style.BoxSales}>
              <Image
                src="/images/sale.jpg"
                alt="password"
                width={400}
                height={300}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box sx={style.BoxText}>
              <Typography sx={style.Text2}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
