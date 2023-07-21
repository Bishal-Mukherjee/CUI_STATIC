import React from "react";
import {
  Container,
  Box,
  Typography,
  FormHelperText,
  Grid,
} from "@mui/material";
// import { Helmet } from "react-helmet-async";
import Carousel from "./carousel/carousel";
import Products from "./products/products";
import Form from "./form/form";
import Content from "./content/content";
import SliderContent from "./slidercontent/slidercontent";
import Footer from "./footer/footer";
import NotFound from "../assets/images/Not_found.png";

const LiveSection = ({ mainObj }) => {
  return (
    <>
      <Container maxWidth={"xl"}>
        {Object.keys(mainObj).length ? (
          <>
            {mainObj.carousel ? <Carousel carousel={mainObj.carousel} /> : null}
            {mainObj.products ? (
              <Products addedproducts={mainObj.products} />
            ) : null}
            <Grid container spacing={2} sx={{ mt: 3 }}>
              {mainObj.slidercontent ? (
                <Grid item xs={12} md={6}>
                  <SliderContent slidercontent={mainObj.slidercontent} />
                </Grid>
              ) : null}

              {mainObj.form ? (
                <Grid item xs={12} md={6}>
                  <Form form={mainObj.form} />
                </Grid>
              ) : null}
            </Grid>
            {mainObj.content ? <Content content={mainObj.content} /> : null}
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              alt="not_found"
              src={NotFound}
              style={{ width: 100, height: 100 }}
            />
          </Box>
        )}
      </Container>

      {mainObj.footer ? (
        <Footer
          footer={mainObj.footer}
          theme={mainObj.theme}
          navDetails={mainObj.navbar}
        />
      ) : null}
    </>
  );
};

export default LiveSection;
