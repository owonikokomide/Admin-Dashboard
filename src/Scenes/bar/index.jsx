import React from 'react'
import { Box } from '@mui/material'
import Header from '../../Components/Header'
import Barchart from '../../Components/Barchart'


function Bar() {
  return (
   <Box ml="20px">
    <Header  title="Bar Chart" subtitle="Simple Bar Chart"/>
    <Box height="75vh">
        <Barchart />
    </Box>
   </Box>
  )
}

export default Bar