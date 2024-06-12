
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
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

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

const propownership = [
  "Private",
  "Central Government Undertaking",
  "GCC",
  "Central Government",
  "State Government",
  "State Government Undertaking",
  "Public",
];
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const buildingtype = [
  "Super Structure",
  "Special Building",
  "Vacant Land",
  "Independent Building",
  "Flats in Multi Storied Building",
  "Central Government 33%",
  "Central Government 75%",
  "State Government",
  "Cell Phone Tower",
  "Cinema Theater",
  "Hospital",
  "Hotel / Lodging House",
  "Kalyana Mandapam",
  "Educational Institution",
  "Central Government 50%",
  "Flat",
  "Hostel",
];

const propertytype = ["Mixed", "Residential", "Commercial", "Others", "Vacant Land"];

const building_used_as = ["Mixed", "Residential", "Commercial", "Others", "Vacant Land"];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Name() {
  const theme = useTheme();
  const [propertyOwnership, setPropertyOwnership] = React.useState('');
  const [buildingType, setBuildingType] = React.useState('');
  const [propertyType, setPropertyType] = React.useState('');
  const [buildingUsedAs, setBuildingUsedAs] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handlePropertyOwnershipChange = (event) => {
    setPropertyOwnership(event.target.value);
  };

  const handleBuildingTypeChange = (event) => {
    setBuildingType(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleBuildingUsedAsChange = (event) => {
    setBuildingUsedAs(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
 
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };


  return (
    <>
    <Card sx={{ minWidth: 275, marginTop: 8 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Assessment Detail
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="property-ownership-label">Property Ownership</InputLabel>
              <Select
                labelId="property-ownership-label"
                id="property-ownership"
                value={propertyOwnership}
                onChange={handlePropertyOwnershipChange}
                input={<OutlinedInput label="Property Ownership" />}
                MenuProps={MenuProps}
              >
                {propownership.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="building-type-label">Building Type</InputLabel>
              <Select
                labelId="building-type-label"
                id="building-type"
                value={buildingType}
                onChange={handleBuildingTypeChange}
                input={<OutlinedInput label="Building Type" />}
                MenuProps={MenuProps}
              >
                {buildingtype.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="property-type-label">Property Type</InputLabel>
              <Select
                labelId="property-type-label"
                id="property-type"
                value={propertyType}
                onChange={handlePropertyTypeChange}
                input={<OutlinedInput label="Property Type" />}
                MenuProps={MenuProps}
              >
                {propertytype.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="building-used-as-label">Building Used As</InputLabel>
              <Select
                labelId="building-used-as-label"
                id="building-used-as"
                value={buildingUsedAs}
                onChange={handleBuildingUsedAsChange}
                input={<OutlinedInput label="Building Used As" />}
                MenuProps={MenuProps}
              >
                {building_used_as.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup
                aria-label="status"
                name="status"
                value={status}
                onChange={handleStatusChange}
              >
                <FormControlLabel value="active" control={<Radio />} label="Active" />
                <FormControlLabel value="new" control={<Radio />} label="New" />
                <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                <FormControlLabel value="completed" control={<Radio />} label="Completed" />
              </RadioGroup>
            </FormControl>
          </Grid>
          

            <Grid item xs={12} sm={6} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Bill No</InputLabel>
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
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="New Door Number"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="GIS Id" variant="outlined" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Property Id</InputLabel>
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
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">
                  Building Used As{" "}
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Another Input" />}
                  MenuProps={MenuProps}
                >
                  {building_used_as.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Assessee Name" variant="outlined" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Present Owner" variant="outlined" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Old Bill Number"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Old Door Number"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Building Name"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Aadhar Number"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

