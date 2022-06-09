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

export default function Loans() {
  const style = {
    TopDeals: {
      padding: "15px",
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
    Name: {
      fontSize: "30px",
      fontFamily: "Gentium Plus",
      fontWeight: "bold",
      paddingBottom: "20px",
    },
    Text: {
      fontSize: "18px",
      fontFamily: "Gentium Plus",
    },
  };

  return (
    <Box sx={{ padding: "0 24px", flexDirection: "row" }}>
      <Box sx={style.BoxLogo} display="flex">
        <Image src="/assets/svg/loan.svg" alt="loans" width={40} height={40} />
        <Typography sx={style.Title}>Loans</Typography>
      </Box>
      <Grid container>
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
                borderRadius: "20px",
              }}
            >
              <Typography sx={style.Name}> AGREEMENT</Typography>
              <Typography sx={style.Text}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.""Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum."qui officia
                deserunt mollit anim id est lqui officia deserunt mollit anim id
                est lqui officia deserunt mollit anim id est laborum."qui
                officia deserunt mollit anim id est lqui officia deserunt mollit
                anim id est l officia deserunt mollit anim id est lqui officia
                deserunt mollit anim id est l
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item sm>
          <Box
            sx={{
              margin: "20px",
              display: "flex",
            }}
          >
            <Paper
              variant="elevation"
              sx={{
                padding: "25px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <Paper
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Typography sx={style.Name}> AGREEMENT FORM</Typography>
                <Grid container spacing={2}>
                  <Grid item sm>
                    <TextField
                      label="First Name"
                      placeholder="First Name"
                      name="First Name"
                      type="First Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/user.svg"
                              alt="mail"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item sm>
                    <TextField
                      label="Last Name"
                      placeholder="Last Name"
                      name="Last Name"
                      type="Last Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/user.svg"
                              alt="mail"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Email"
                      placeholder="Email"
                      name="Email"
                      type="Email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/mail.svg"
                              alt="mail"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Area Code"
                      placeholder="Area Code"
                      name="Area Code"
                      type="Area Code"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/area.svg"
                              alt="area"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Phone Number"
                      placeholder="Phone Number"
                      name="Phone Number"
                      type="Phone Number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/phone.svg"
                              alt="phone"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Street Address"
                      placeholder="Street Address"
                      name="Street Address"
                      type="Street Address"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/address.svg"
                              alt="address"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Street Address Line 2"
                      placeholder="Street Address Line 2"
                      name="Street Address Line 2"
                      type="Street Address Line 2"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/address.svg"
                              alt="address"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="City"
                      placeholder="City"
                      name="City"
                      type="City"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/address.svg"
                              alt="address"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="State/Province"
                      placeholder="State/Province"
                      name="State/Province"
                      type="State/Province"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/address.svg"
                              alt="address"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Postal/Zip Code"
                      placeholder="Postal/Zip Code"
                      name="Postal/Zip Code"
                      type="Postal/Zip Code"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/address.svg"
                              alt="address"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Country"
                      placeholder="Country"
                      name="Country"
                      type="Country"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image
                              src="/assets/svg/address.svg"
                              alt="address"
                              width={20}
                              height={20}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginTop: "12px" }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{ ...design.button2, marginTop: "20px" }}
                >
                  Submit
                </Button>
              </Paper>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Loans.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
