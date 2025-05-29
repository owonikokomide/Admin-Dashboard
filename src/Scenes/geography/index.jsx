import React from 'react'
import { Box } from '@mui/material'
import Header from '../../Components/Header'
import Geographychart from '../../Components/GeographyChart'


function Geography() {
  return (
   <Box ml="20px">
    <Header  title="Geography Chart" subtitle="Simple Geography Chart"/>
    <Box height="75vh">
        <Geographychart />
    </Box>
   </Box>
  )
}

export default Geography