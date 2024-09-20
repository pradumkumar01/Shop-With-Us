import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6" >
            {" "}
            Company{" "}
          </Typography>

          <div>
            <Button className="pb-5" varient="h6" gutterBotton >
             {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             
             {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             {" "} 
             Press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             {" "} 
             Partners{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
           {" "} Solutions{" "}
          </Typography>

          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             {" "} Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
              {" "}Analytic
              {" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             {" "} Commerce{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             {" "} Insights {" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
             {" "} Support
             {" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
           {" "} Documents{" "}
          </Typography>

          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
            {" "}  Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
            {" "} Api Status{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton></Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton></Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton></Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
          {" "} Legal{" "}
          </Typography>

          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
            {" "}  Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
            {" "}  Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton>
            {" "} TERMS{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton></Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBotton></Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
            Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
            Icons made by {' '}
            <Link href="https://www.freepik.com" color="inherit" underline='always'>
                Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com/" color="inherit" underline='always'>
            www.flaticon.com
            </Link>
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
