import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppState, Reservation } from '../../../Interface';
import { AppContext } from '../../../Context';


interface DefaultProps {
  setSelectedResult: any,
  searchResults: Reservation[]
}
const ResultTable = (props: DefaultProps) => {

  const{setSelectedResult, searchResults} = props;
  const {  handleOpen } = useContext<AppState>(AppContext);

    const handleResultClick = (result: Reservation) => {
        setSelectedResult(result)
        handleOpen()
    }

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">E-Mail</TableCell>
              <TableCell align="right">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults?.map((result: Reservation) => (
              <TableRow
                key={result.phone}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleResultClick(result)}
                data-testid="result-row"
              >
                <TableCell component="th" scope="row" data-testid="first-name">
                  {result.firstName}
                </TableCell>
                <TableCell align="right" data-testid="last-name">{result.lastName}</TableCell>
                <TableCell align="right" data-testid="e-mail">{result.email}</TableCell>
                <TableCell align="right" data-testid="phone-number">{result.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       
      )

}

export default ResultTable;