import React from "react";
import Admin from "../components/Admin";
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/Image";

export default function Properties() {
  const style = {
    TopDeals: {
      padding: "5px",
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
    },
    Name: {
      fontSize: "20px",
      fontFamily: "Gentium Plus",
      fontWeight: "bold",
    },
    Price: {
      fontSize: "15px",
      fontFamily: "Gentium Plus",
    },
    Place: {
      fontSize: "18px",
      fontFamily: "Gentium Plus",
    },
  };
  return (
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={style.BoxLogo} display="flex">
        <Image
          src="/assets/svg/property.svg"
          alt="password"
          width={40}
          height={40}
        />
        <Typography sx={style.Title}>Properties</Typography>
      </Box>

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
          }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/5.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> The Cottage</Typography>
                  <Typography sx={style.Price}> $1000/month</Typography>
                  <Typography sx={style.Place}>Sta. Ana, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/6.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Seaside </Typography>
                  <Typography sx={style.Price}> $900/month</Typography>
                  <Typography sx={style.Place}>San Luis, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item sm>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/7.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Fairview </Typography>
                  <Typography sx={style.Price}> $700/month</Typography>
                  <Typography sx={style.Place}>Mexico, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item sm>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/8.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Hillside </Typography>
                  <Typography sx={style.Price}> $1200/month</Typography>
                  <Typography sx={style.Place}>Bacolor, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/9.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Hillcrest </Typography>
                  <Typography sx={style.Price}> $1500/month</Typography>
                  <Typography sx={style.Place}>Guagua, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/10.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Orchard Cottage </Typography>
                  <Typography sx={style.Price}> $1300/month</Typography>
                  <Typography sx={style.Place}>Arayat, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/11.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Oakland </Typography>
                  <Typography sx={style.Price}> $800/month</Typography>
                  <Typography sx={style.Place}>Magalang, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/12.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> The Laurels </Typography>
                  <Typography sx={style.Price}> $920/month</Typography>
                  <Typography sx={style.Place}>
                    San Fernando, Pampanga
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item sm>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/13.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Ivy Cottage </Typography>
                  <Typography sx={style.Price}> $600/month</Typography>
                  <Typography sx={style.Place}>Porac, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/14.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> The Gables </Typography>
                  <Typography sx={style.Price}> $950/month</Typography>
                  <Typography sx={style.Place}>Apalit, Pampanga</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item sm>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Paper
                  variant="elevation"
                  sx={{
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/15.jpg"
                    alt="Home"
                    width={200}
                    height={200}
                  />
                  <Typography sx={style.Name}> Woodlands </Typography>
                  <Typography sx={style.Price}> $1100/month</Typography>
                  <Typography sx={style.Place}>
                    FloridaBlanca, Pampanga
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

Properties.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
