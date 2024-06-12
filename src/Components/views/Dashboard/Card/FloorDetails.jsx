// import React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useTheme } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";

// import Grid from "@mui/material/Grid";
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// function FloorDetails() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };
//   return (
//     <div>
//       <Card sx={{ minWidth: 275, marginTop: 8 }}>
//         <CardContent>
//           <Grid container spacing={2}>
//             <Grid item xs={3}>
//               <Typography
//                 sx={{ fontSize: 14 }}
//                 color="text.secondary"
//                 gutterBottom
//               >
//                 Floor Deatils{" "}
//               </Typography>
//             </Grid>
//             <Grid item xs={9}></Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">Floor</InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-basic"
//                   label="Area (Sq ft)"
//                   variant="outlined"
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">
//                   Property Usage
//                 </InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">Occupancy</InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">
//                   Type of Construction
//                 </InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}></Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-basic"
//                   label="Year of Construction"
//                   variant="outlined"
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">
//                   Planning Approval
//                 </InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">
//                   Approval Deatils
//                 </InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-basic"
//                   label="PPA No"
//                   variant="outlined"
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-basic"
//                   label="Flat No"
//                   variant="outlined"
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">
//                   Establishment Type
//                 </InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl sx={{ m: 1, width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">
//                   Building Usage
//                 </InputLabel>
//                 <Select
//                   labelId="demo-multiple-name-label"
//                   id="demo-multiple-name"
//                   multiple
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput label="Another Input" />}
//                   MenuProps={MenuProps}
//                 >
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}
//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={8}></Grid>
//             <Grid item xs={3}>
//               <Typography
//                 sx={{ fontSize: 14 }}
//                 color="text.secondary"
//                 gutterBottom
//               >
//                 No of Floors{" "}
//               </Typography>
//             </Grid>
//             <Grid item xs={8}></Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-number"
//                   label="G+"
//                   type="number"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-number"
//                   label="Basement"
//                   type="number"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={4}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& > :not(style)": { m: 1, width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="Total Floors"
//                   label="Flat No"
//                   variant="outlined"
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default FloorDetails;

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function FloorDetails() {
  const theme = useTheme();
  const [formFields, setFormFields] = React.useState([
    {
      personName: [],
      area: "",
      propertyUsage: [],
      occupancy: [],
      typeOfConstruction: [],
      yearOfConstruction: "",
      planningApproval: [],
      approvalDetails: [],
      ppaNo: "",
      flatNo: "",
      establishmentType: [],
      buildingUsage: [],
      noOfFloors: "",
      basement: "",
    },
  ]);

  const handleAdd = () => {
    setFormFields([
      ...formFields,
      {
        personName: [],
        area: "",
        propertyUsage: [],
        occupancy: [],
        typeOfConstruction: [],
        yearOfConstruction: "",
        planningApproval: [],
        approvalDetails: [],
        ppaNo: "",
        flatNo: "",
        establishmentType: [],
        buildingUsage: [],
        noOfFloors: "",
        basement: "",
      },
    ]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormFields = [...formFields];
    updatedFormFields[index][name] =
      typeof value === "string" ? value.split(",") : value;
    setFormFields(updatedFormFields);
  };

  const handleTextFieldChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormFields = [...formFields];
    updatedFormFields[index][name] = value;
    setFormFields(updatedFormFields);
  };

  return (
    <div>
      <Card sx={{ minWidth: 275, marginTop: 8 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Floor Details
          </Typography>
          {formFields.map((field, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="floor-label">Floor</InputLabel>
                  <Select
                    labelId="floor-label"
                    id="floor"
                    multiple
                    name="personName"
                    value={field.personName}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Floor" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
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
                    label="Area (Sq ft)"
                    variant="outlined"
                    name="area"
                    value={field.area}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="property-usage-label">
                    Property Usage
                  </InputLabel>
                  <Select
                    labelId="property-usage-label"
                    id="property-usage"
                    multiple
                    name="propertyUsage"
                    value={field.propertyUsage}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Property Usage" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.propertyUsage, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="occupancy-label">Occupancy</InputLabel>
                  <Select
                    labelId="occupancy-label"
                    id="occupancy"
                    multiple
                    name="occupancy"
                    value={field.occupancy}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Occupancy" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.occupancy, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="type-of-construction-label">
                    Type of Construction
                  </InputLabel>
                  <Select
                    labelId="type-of-construction-label"
                    id="type-of-construction"
                    multiple
                    name="typeOfConstruction"
                    value={field.typeOfConstruction}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Type of Construction" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.typeOfConstruction, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="year-of-construction"
                    label="Year of Construction"
                    variant="outlined"
                    name="yearOfConstruction"
                    value={field.yearOfConstruction}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="planning-approval-label">
                    Planning Approval
                  </InputLabel>
                  <Select
                    labelId="planning-approval-label"
                    id="planning-approval"
                    multiple
                    name="planningApproval"
                    value={field.planningApproval}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Planning Approval" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.planningApproval, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="approval-details-label">
                    Approval Details
                  </InputLabel>
                  <Select
                    labelId="approval-details-label"
                    id="approval-details"
                    multiple
                    name="approvalDetails"
                    value={field.approvalDetails}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Approval Details" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.approvalDetails, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="ppa-no"
                    label="PPA No"
                    variant="outlined"
                    name="ppaNo"
                    value={field.ppaNo}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="flat-no"
                    label="Flat No"
                    variant="outlined"
                    name="flatNo"
                    value={field.flatNo}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="establishment-type-label">
                    Establishment Type
                  </InputLabel>
                  <Select
                    labelId="establishment-type-label"
                    id="establishment-type"
                    multiple
                    name="establishmentType"
                    value={field.establishmentType}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Establishment Type" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.establishmentType, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="building-usage-label">Building Usage</InputLabel>
                  <Select
                    labelId="building-usage-label"
                    id="building-usage"
                    multiple
                    name="buildingUsage"
                    value={field.buildingUsage}
                    onChange={(e) => handleChange(index, e)}
                    input={<OutlinedInput label="Building Usage" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.buildingUsage, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="no-of-floors"
                    label="G+"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="noOfFloors"
                    value={field.noOfFloors}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="basement"
                    label="Basement"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="basement"
                    value={field.basement}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="total-floors"
                    label="Total Floors"
                    variant="outlined"
                    name="totalFloors"
                    value={field.totalFloors}
                    onChange={(e) => handleTextFieldChange(index, e)}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default FloorDetails;

