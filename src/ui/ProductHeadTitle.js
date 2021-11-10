import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

function ProductHeadTitle() {
  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <Typography variant="body2" style={{ paddingLeft: "1rem" }}>
                Products Name
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" style={{ textAlign: "center" }}>
                Retail
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" style={{ textAlign: "center" }}>
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" style={{ textAlign: "center" }}>
                Subtotal
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}

export default ProductHeadTitle;
