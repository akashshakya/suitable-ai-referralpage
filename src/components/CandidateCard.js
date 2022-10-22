import React from 'react'
import CandidateProgress from './CandidateProgress'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CandidateCard(props) {
  // const CandidateObjectArray = [
  //   {
  //     candidateName: "Anmol Mahajan", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 4
  //   },
  //   {
  //     candidateName: "Virat Kohli", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 2
  //   },
  //   {
  //     candidateName: "Adam Gilchrist", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 1
  //   },
  //   {
  //     candidateName: "Elon Musk", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 1
  //   },
  //   {
  //     candidateName: "Steve Jobs", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 4
  //   },
  //   {
  //     candidateName: "Steve Wozniak", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 2
  //   },
  //   {
  //     candidateName: "Mark Zuckerberg", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 4
  //   },
  //   {
  //     candidateName: "Roger Federer", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 3
  //   },
  //   {
  //     candidateName: "Cristiano Ronaldo", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 4
  //   },
  //   {
  //     candidateName: "Sachin Tendulkar", 
  //     designation : "Sr.Engineer",
  //     stepNumber : 3
  //   }
  // ]


  return (
    <div className='candidate-card' >
       <TableContainer  className="table-show">
      <Table sx={{ minWidth: 640 }} aria-label="simple table">
        <TableHead style={{margin:'40px'}}>
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

      {
        props.CandidateObjectArray.map((element, index)=>{
          return (
            <CandidateProgress key={index} stepNumber={element.stepNumber} candidateName={element.candidateName} designation={element.designation}/>
          )
        })
      }
  
        {/* <CandidateProgress key={1} stepNumber={4}/>
        <CandidateProgress key={2} stepNumber={2}/>
        <CandidateProgress key={3} stepNumber={0}/>
        <CandidateProgress key={4} stepNumber={4}/>
        <CandidateProgress key={4} stepNumber={2}/>
        <CandidateProgress key={6} stepNumber={1}/>
        <CandidateProgress key={7} stepNumber={2}/>
        <CandidateProgress key={8} stepNumber={0}/>
        <CandidateProgress key={9} stepNumber={3}/>
        <CandidateProgress key={10} stepNumber={2}/> */}
    </div>
  )
}
