import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
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

const direction = [
  {
    value: "south",
    label: "South",
  },
  {
    value: "north",
    label: "North",
  },
];
const names = [
  {
    value: "sou",
    label: "Sou",
  },
  {
    value: "nor",
    label: "Nor",
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name.value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdown() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      value
    );
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Get Information
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Region</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {direction.map((name) => (
                  <MenuItem
                    key={name.value}
                    value={name.value}
                    style={getStyles(name, personName, theme)}
                  >
                    {name.label}
                  </MenuItem>
                ))}
                 
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Zone</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Another Input" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name.value}
                    value={name.value}
                    style={getStyles(name, personName, theme)}
                  >
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Ward</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Another Input" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name.value}
                    value={name.value}
                    style={getStyles(name, personName, theme)}
                  >
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Street</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                multiple
                value={personName}
                onChange={handleChange}
                // input={<OutlinedInput label="Another Input" />}
                // MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name.value}
                    value={name.value}
                    style={getStyles(name, personName, theme)}
                  >
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
