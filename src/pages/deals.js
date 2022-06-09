import React from "react";
import Admin from "../components/Admin";
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/Image";
import Head from "next/head";

export default function Deals() {
  const style = {
    TopDeals: {
      padding: "10px",
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
      fontFamily: "Gentium Plus",
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
        <Head>
          <title> Woodlands - Deals </title>
        </Head>
        <Typography sx={style.Title}>Deals</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item sm>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/search.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Typography marginLeft="auto">Search</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1.4}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Typography
                sx={{
                  marginRight: "25px",
                  marginLeft: "5px",
                }}
              >
                For Sale
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1.8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Typography
                sx={{
                  marginRight: "10px",
                  marginLeft: "5px",
                }}
              >
                MinPrice: $500K
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1.8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Typography
                sx={{
                  marginRight: "10px",
                  marginLeft: "5px",
                }}
              >
                MaxPrice: 700k
              </Typography>
              <Image
                src="/assets/svg/more.svg"
                alt="password"
                width={20}
                height={20}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1.8}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Typography
                sx={{
                  marginRight: "10px",
                  marginLeft: "5px",
                }}
              >
                FloorArea: 60 m2
              </Typography>
              <Image
                src="/assets/svg/updown.svg"
                alt="password"
                width={10}
                height={10}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1.2}>
          <Paper sx={style.TopDeals}>
            <Box display="flex">
              <Image
                src="/assets/svg/slider.svg"
                alt="password"
                width={20}
                height={20}
              />
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
              >
                More
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          padding: "5px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            marginRight: "20px",
            marginTop: "90px",
          }}
        >
          <Grid container>
            <Grid item>
              <Box
                sx={{
                  margin: "10px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Image
                    src="/images/1.jpg"
                    alt="Home"
                    width={150}
                    height={150}
                  />
                  <Typography sx={style.sale}> For Sale!</Typography>
                  <Typography sx={style.sale}> $ 550,000</Typography>
                  <Typography sx={style.sale}> Meycauayan, Bulacan</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  margin: "10px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Image
                    src="/images/2.jpg"
                    alt="Home"
                    width={150}
                    height={150}
                  />
                  <Typography sx={style.sale}> For Sale!</Typography>
                  <Typography sx={style.sale}> $ 680,000</Typography>
                  <Typography sx={style.sale}> Bocaue, Bulacan</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  margin: "10px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Image
                    src="/images/3.jpg"
                    alt="Home"
                    width={150}
                    height={150}
                  />
                  <Typography sx={style.sale}> For Sale!</Typography>
                  <Typography sx={style.sale}> $ 610,000</Typography>
                  <Typography sx={style.sale}> Malolos, Bulacan</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "inline-block",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              margin: "20px",
            }}
          >
            <Paper
              variant="elevation"
              sx={{
                padding: "40px",
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <Image src="/images/4.jpg" alt="Home" width={319} height={319} />
              <Typography sx={style.sale}> For Sale!</Typography>
              <Typography sx={style.sale}> $ 700,000</Typography>
              <Typography sx={style.sale}> Plaridel, Bulacan</Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Deals.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
