import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const remarks = [
  "Shop Closed",
  "Not willing to share license details",
  "Used as godown",
  "Shop not occupied",
];

function Establishment() {
  const theme = useTheme();
  const [remark, setRemark] = React.useState("");

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  return (
    <>
      <Card sx={{ minWidth: 275, marginTop: 8 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Establishment
              </Typography>
            </Grid>
            <Grid xs={9}></Grid>
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
                  label="Licensee Code No"
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
                  label="Name of Establishment"
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
                  label="Nature of Trade"
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
                  label="Year of Last Removal"
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
                  label="Horse Power Used"
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
                  label="Son of/Wife of/Daughter of"
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
                  label="Owner Name"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="remarks-label">Remarks</InputLabel>
                <Select
                  labelId="remarks-label"
                  id="remarks"
                  value={remark}
                  onChange={handleRemarkChange}
                  input={<OutlinedInput label="Remarks" />}
                  MenuProps={MenuProps}
                >
                  {remarks.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p">Address for Communication</Typography>
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
                  id="address1"
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
                  id="address2"
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
                <TextField id="area" label="Area" variant="outlined" />
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
                <TextField id="location" label="Location" variant="outlined" />
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
                <TextField id="city" label="City" variant="outlined" />
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
                <TextField id="state" label="State" variant="outlined" />
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
                <TextField id="pincode" label="Pincode" variant="outlined" />
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
                <TextField id="mobile" label="Mobile" variant="outlined" />
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
                <TextField id="landline" label="Landline" variant="outlined" />
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
                <TextField id="email" label="E-mail ID" variant="outlined" />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Establishment;
