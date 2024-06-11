import React from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";

function AddressDetails() {
  return (
    <Card sx={{ minWidth: 275, marginTop: 8 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Address Details {""}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <h4>Property Address</h4>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address 1"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address 2"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Area" variant="outlined" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="City  "
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="State" variant="outlined" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <h4>Communication Address</h4>
          </Grid>

          <Grid item xs={12}>
            <Box component="section" sx={{ p: 1, border: "1px solid grey" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Same as Above"
                />
              </FormGroup>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address 1"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address 2"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Area" variant="outlined" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="City  "
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="State" variant="outlined" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>

          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Landline"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="E-mail ID"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AddressDetails;
