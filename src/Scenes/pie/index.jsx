import React from 'react'
import { Box } from '@mui/material'
import Header from '../../Components/Header'
import Piechart from '../../Components/PieChart'


function Pie() {
  return (
   <Box ml="20px">
    <Header  title="Pie Chart" subtitle="Simple Pie Chart"/>
    <Box height="75vh">
        <Piechart />
    </Box>
   </Box>
  )
}

export default Pie