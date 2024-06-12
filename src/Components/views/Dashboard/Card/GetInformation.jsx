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
  { value: "south", label: "South" },
  { value: "north", label: "North" },
  { value: "east", label: "East" },
  { value: "west", label: "West" },

];
const names = [
  { value: "sou", label: "Sou" },
  { value: "nor", label: "Nor" },
];

export default function Dropdown() {
  const theme = useTheme();
  const [region, setRegion] = React.useState('');
  const [zone, setZone] = React.useState('');
  const [ward, setWard] = React.useState('');
  const [street, setStreet] = React.useState('');

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleZoneChange = (event) => {
    setZone(event.target.value);
  };

  const handleWardChange = (event) => {
    setWard(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Get Information
            </Typography>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="region-select-label">Region</InputLabel>
              <Select
                labelId="region-select-label"
                id="region-select"
                value={region}
                onChange={handleRegionChange}
                input={<OutlinedInput label="Region" />}
                MenuProps={MenuProps}
              >
                {direction.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="zone-select-label">Zone</InputLabel>
              <Select
                labelId="zone-select-label"
                id="zone-select"
                value={zone}
                onChange={handleZoneChange}
                input={<OutlinedInput label="Zone" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="ward-select-label">Ward</InputLabel>
              <Select
                labelId="ward-select-label"
                id="ward-select"
                value={ward}
                onChange={handleWardChange}
                input={<OutlinedInput label="Ward" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="street-select-label">Street</InputLabel>
              <Select
                labelId="street-select-label"
                id="street-select"
                value={street}
                onChange={handleStreetChange}
                input={<OutlinedInput label="Street" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
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
