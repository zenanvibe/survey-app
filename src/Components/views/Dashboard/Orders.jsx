// import * as React from "react";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";

// // Generate Order Data
// function createData(id, wardName, streetName, assesmentNo, oldAssesmentNo, ownerName, plotArea, newDoorNo, mobileNo, usageName, zone, halfYearTax, balance) {
//   return { id, wardName, streetName, assesmentNo, oldAssesmentNo, ownerName, plotArea, newDoorNo, mobileNo, usageName, zone, halfYearTax, balance };
// }

// const rows = [
//   createData(1, "WARD 30", "DHARMARAJA KOVIL EAST ST", "146/030/903256", "146/17569", "KRISHNA PILLAI.P", 104, "21B", "", "COMMERCIAL", "ZONE C", 496, 16713),
//   createData(2, "WARD 30", "ETTHIRAJ STREET", "146/030/903162", "146/18303", "PALAVESAM", 260, "1", "", "RESIDENTIAL", "ZONE C", 63, 126),
//   createData(3, "WARD 30", "ETTHIRAJ STREET", "146/030/903163", "146/18304", "E.SUBBAIAH", 410, "1A", "", "RESIDENTIAL", "ZONE C", 63, 178),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Orders() {
//   return (
//     <React.Fragment>
//       <Title>Recent Orders</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Sl No</TableCell>
//             <TableCell>Ward Name</TableCell>
//             <TableCell>Street Name</TableCell>
//             <TableCell>Assesment Number</TableCell>
//             <TableCell>Old Assesment Number</TableCell>
//             <TableCell>Owner Name</TableCell>
//             <TableCell>Plot Area</TableCell>
//             <TableCell>New Door Number</TableCell>
//             <TableCell>Mobile Number</TableCell>
//             <TableCell>Usage</TableCell>
//             <TableCell align="right">Half Year Tax</TableCell>
//             <TableCell align="right">Balance</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.id}</TableCell>
//               <TableCell>{row.wardName}</TableCell>
//               <TableCell>{row.streetName}</TableCell>
//               <TableCell>{row.assesmentNo}</TableCell>
//               <TableCell>{row.oldAssesmentNo}</TableCell>
//               <TableCell>{row.ownerName}</TableCell>
//               <TableCell>{row.plotArea}</TableCell>
//               <TableCell>{row.newDoorNo}</TableCell>
//               <TableCell>{row.mobileNo}</TableCell>
//               <TableCell>{row.usageName}</TableCell>
//               <TableCell align="right">{row.halfYearTax}</TableCell>
//               <TableCell align="right">{row.balance}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//         See more orders
//       </Link>
//     </React.Fragment>
//   );
// }
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, wardName, streetName, assesmentNo, oldAssesmentNo, ownerName, plotArea, newDoorNo, mobileNo, usageName, zone, halfYearTax, balance) {
    return { id, wardName, streetName, assesmentNo, oldAssesmentNo, ownerName, plotArea, newDoorNo, mobileNo, usageName, zone, halfYearTax, balance };
   }

const rows = [
  createData(1, "WARD 30", "DHARMARAJA KOVIL EAST ST", "146/030/903256", "146/17569", "KRISHNA PILLAI.P", 104, "21B", "", "COMMERCIAL", "ZONE C", 496, 16713),
     createData(2, "WARD 30", "ETTHIRAJ STREET", "146/030/903162", "146/18303", "PALAVESAM", 260, "1", "", "RESIDENTIAL", "ZONE C", 63, 126),
    createData(3, "WARD 30", "ETTHIRAJ STREET", "146/030/903163", "146/18304", "E.SUBBAIAH", 410, "1A", "", "RESIDENTIAL", "ZONE C", 63, 178),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SI No</TableCell>
            <TableCell align="right">Ward Name</TableCell>
            <TableCell align="right">Street Name</TableCell>
            <TableCell align="right">Assessment Number</TableCell>
            <TableCell align="right">Old Assessment Number</TableCell>
            <TableCell align="right">Owner Name</TableCell>
            <TableCell align="right">Plot Area</TableCell>
            <TableCell align="right">New Door Number</TableCell>
            <TableCell align="right">Mobile Number</TableCell>
            <TableCell align="right">Usage</TableCell>
            <TableCell align="right">Zone</TableCell>
            <TableCell align="right">Half Year Tax</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.wardName}</TableCell>
              <TableCell align="right">{row.streetName}</TableCell>
              <TableCell align="right">{row.assesmentNo}</TableCell>
              <TableCell align="right">{row.oldAssesmentNo}</TableCell>
              <TableCell align="right">{row.ownerName}</TableCell>
              <TableCell align="right">{row.plotArea}</TableCell>
              <TableCell align="right">{row.newDoorNo}</TableCell>
              <TableCell align="right">{row.mobileNo}</TableCell>
              <TableCell align="right">{row.usageName}</TableCell>
              <TableCell align="right">{row.zone}</TableCell>
              <TableCell align="right">{row.halfYearTax}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
