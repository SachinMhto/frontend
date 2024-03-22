import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const DetailsTable = () => {
  const handleRestaurantStatus = () => {};
  return (
    <div className="lg:px-20 px-5 pb-5">
      <div className="py-5 flex justify-center items-center gap-5">
        <h2 className="text-2xl lg:text-7xl text-center font-bold p-5">
          Nepali Best Food
        </h2>
        <Button
          color={true ? "primary" : "error"}
          className="py-[1rem] px-[2rem]"
          variant="contained"
          onClick={handleRestaurantStatus}
          size="large"
        >
          {true ? "close" : "open"}
        </Button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Restaurant Details</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Restaurant Name</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Cuision Type</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Opening</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Status Now</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {true ? (
                      <span className="px-5 py-2 rounded-full bg-green-500 text-gray-950">
                        Open
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-500 text-gray-950">
                        Error
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Address</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal code</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Contact</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Sachin Mahato
                  </p>
                </div>
                <div className="flex text-white-400 items-center pb-3">
                  <p className="w-48">Social</p>
                  <div>
                    <span className="pr-5">-</span>
                    <a href="/">
                      <FacebookIcon
                        className="text-blue-900 hover:bg-blue-400 duration-300"
                        sx={{ fontSize: "2rem" }}
                      />
                    </a>
                    <a href="/">
                      <WhatsAppIcon
                        className="text-green-900 hover:bg-green-400 duration-300"
                        sx={{ fontSize: "2rem" }}
                      />
                    </a>
                    <a href="/">
                      <LinkedInIcon
                        className="text-white hover:bg-white hover:text-black duration-300"
                        sx={{ fontSize: "2rem" }}
                      />
                    </a>
                    <a href="/">
                      <InstagramIcon
                        className="text-red-900 hover:bg-red-400 duration-300"
                        sx={{ fontSize: "2rem" }}
                      />
                    </a>
                    <a href="/">
                      <TwitterIcon
                        className="text-blue-900 hover:bg-blue-400 duration-300"
                        sx={{ fontSize: "2rem" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsTable;
