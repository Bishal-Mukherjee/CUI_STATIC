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
import Article from "./article/article";
import Form from "./form/form";
import Content from "./content/content";
import SliderContent from "./slidercontent/slidercontent";
import Footer from "./footer/footer";
// import NotFound from "../assets/svg/404.svg";

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
              {mainObj.article ? (
                <Grid item xs={12} md={6}>
                  <Article article={mainObj.article} />
                </Grid>
              ) : null}

              {mainObj.form ? (
                <Grid item xs={12} md={6}>
                  <Form form={mainObj.form} />
                </Grid>
              ) : null}
            </Grid>
            {mainObj.content ? <Content content={mainObj.content} /> : null}
            {mainObj.slidercontent ? (
              <SliderContent slidercontent={mainObj.slidercontent} />
            ) : null}
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
            <Typography>Preview unavailable!</Typography>
            <FormHelperText>Add content to view</FormHelperText>
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
