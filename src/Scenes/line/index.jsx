
import { Box } from '@mui/material'
import Header from '../../Components/Header'
import LineChart from '../../Components/LineChart'


function Line() {
  return (
   <Box ml="20px">
    <Header  title="Line Chart" subtitle="Simple Line Chart"/>
    <Box height="75vh">
        <LineChart />
    </Box>
   </Box>
  )
}

export default Line