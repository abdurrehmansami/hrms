import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  {
    id: "Client",
    label: "Client",
    //    minWidth: 170
  },
  {
    id: "Deadline",
    label: "Deadline",
    //   minWidth: 100
  },
  {
    id: "Description",
    label: "Description",
    // minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  //   {
  //     id: 'size',
  //     label: 'Size\u00a0(km\u00b2)',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'density',
  //     label: 'Density',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toFixed(2),
  //   },
];

function createData(Client, Deadline, Description) {
  //   const density = Description / size;
  return { Client, Deadline, Description };
}

const rows = [
  createData("Ayaz Mehmood", "31-08-22", "HRMS"),
  createData("Yusra", "25-07-22", "LMS"),
  createData("Umair", "20-07-22", "CMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
  createData("Abdulah", "20-07-22", "SMS"),
];

export default function Upcoming() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        overflow: "hidden",
        border: "3px solid",
        borderColor: "#92C224",
        margin: "10px",
        backgroundColor: "#92C224",
      }}
    >
      {" "}
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Upcoming Projects
      </h3>
      <TableContainer
        sx={{ maxHeight: 250, width: "30rem", backgroundColor: "yellow" }}
      >
        {/* <h3>Upcoming Projects</h3> */}
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ backgroundColor: "#92C224" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={Math.random()}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
