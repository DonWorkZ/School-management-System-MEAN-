import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
//import RemoveIcon from '@material-ui/icons/Remove';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#051f3e",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables({attendanceData}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell  align="left">Date</StyledTableCell>
            <StyledTableCell  align="left">Student ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.map((row) => (
            <StyledTableRow key={row.studentID}>
                <StyledTableCell >
                {row.date}
              </StyledTableCell>
               <StyledTableCell >
                {row.studentID}
              </StyledTableCell>
              <StyledTableCell >
                {row.name}
              </StyledTableCell>
              <StyledTableCell>
                {row.lastname}
              </StyledTableCell>
              <StyledTableCell>
                {row.status ? <CheckIcon/> : <ClearIcon className="text-danger"/>}
              </StyledTableCell>
               <StyledTableCell>
                 <IconButton> <EditIcon/> </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
