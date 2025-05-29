import Header from '../../Components/Header'
import { Box, Button, IconButton, Typography, useTheme} from '@mui/material'
import { tokens } from '../../Theme'
import { mockTransactions } from '../../Data/MockData'
import DownloadOutlinedIcon  from '@mui/icons-material/DownloadOutlined'
import  EmailIcon  from '@mui/icons-material/Email'
import  PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import  PersonAddIcon from '@mui/icons-material/PersonAdd'
import  TrafficIcon  from '@mui/icons-material/Traffic'
import LineChart from "../../Components/LineChart"
import Barchart from "../../Components/Barchart"
import PieChart from "../../Components/PieChart"
import ProgressCircle from "../../Components/ProgressCircle"
import StatBox from "../../Components/StatBox"

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
      </Box>
      <Box>
        <Button sx={{backgroundColor:colors.greenAccent[700], color:colors.grey[100], fontSize: "14px", fontWeight:"bold", padding:"10px 20px"}}>
         <DownloadOutlinedIcon sx={{mr:"10px"}}/>
         Download Reports
        </Button>
      </Box>
    </Box>
  )
}

export default Dashboard