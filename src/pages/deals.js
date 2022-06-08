import React from "react";
import Admin from "../components/Admin";
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/Image";

export default function Deals() {
  const style = {
    TopDeals: {
      padding: "15px",
    },
    BoxLogo: {
      paddingTop: "30px",
      paddingBottom: "30px",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
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
    Title: {
      color: "white",
      fontSize: "30px",
      paddingLeft: "20px",
      fontWeight: "bold",
    },
  };
  return (
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={style.BoxLogo} display="flex">
        <Image
          src="/assets/svg/deals.svg"
          alt="password"
          width={40}
          height={40}
        />
        <Typography sx={style.Title}>Deals</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box>
              <Typography variant="h6">qweqwe</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box>
              <Typography variant="h6">qweqwe</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box>
              <Typography variant="h6">qweqwe</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box>
              <Typography variant="h6">qweqwe</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box>
              <Typography variant="h6">qweqwe</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box>
              <Typography variant="h6">qweqwe</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

Deals.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
