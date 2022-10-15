import React from 'react'
import CandidateProgress from './CandidateProgress'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CandidateCard() {
  return (
    <div className='candidate-card' >
       <TableContainer  className="table-show">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{margin:'50px'}}>
          <TableRow >
            <TableCell className='table-head' align="center">Candidate</TableCell>
            <TableCell className='table-head' align="center">Referred</TableCell>
            <TableCell className='table-head' align="center">Interviewed</TableCell>
            <TableCell className='table-head' align="center">Hired</TableCell>
            <TableCell className='table-head' align="center">Joined</TableCell>
            <TableCell className='table-head' align="center">Reward</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
        <CandidateProgress key={1} stepNo={1}/>
        <CandidateProgress key={2} stepNo={2}/>
        <CandidateProgress key={3} stepNo={0}/>
        <CandidateProgress key={4} stepNo={3}/>
        <CandidateProgress key={5} stepNo={2}/>
        <CandidateProgress key={6} stepNo={1}/>
        <CandidateProgress key={7} stepNo={2}/>
        <CandidateProgress key={8} stepNo={0}/>
        <CandidateProgress key={9} stepNo={3}/>
        <CandidateProgress key={10} stepNo={2}/>
    </div>
  )
}
