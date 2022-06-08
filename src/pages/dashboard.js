import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Admin from "../components/Admin";
import Image from "next/image";

export default function Dashboard() {
  const style = {
    TopDeals: {
      padding: "24px",
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
    },
  };
  return (
    <Box sx={{ padding: "0 24px" }}>
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
            <Typography variant="h6">(24.7k Review)</Typography>
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
            <Typography variant="h6">(45.3k Review)</Typography>
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
            <Typography variant="h6">(35.9k Review)</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ padding: "56px" }}>
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
              <Typography>
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