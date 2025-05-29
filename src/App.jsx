import React from 'react'
import {Routes, Route} from "react-router-dom"
import { ColorModeContext, useMode } from './Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from "./Scenes/global/Topbar"
import Sidebar from "./Scenes/global/Sidebar"
import Dashboard from './Scenes/dashboard/Index'
import Team from './Scenes/team'
import Invoices from './Scenes/invoices'
import Contact from './Scenes/contact'
import Bar from './Scenes/bar'
import Form from './Scenes/form'
import Line from './Scenes/line'
import Pie from './Scenes/pie'
import FAQ from './Scenes/faq'
import Geography from './Scenes/geography'
import Calendar from './Scenes/calendar'




function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className='App'>
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/team' element={<Team />}/>
                <Route path='/invoices' element={<Invoices />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/bar' element={<Bar />}/>
                <Route path='/form' element={<Form />}/>
                <Route path='/line' element={<Line />}/>
                <Route path='/pie' element={<Pie />}/>
                <Route path='/faq' element={<FAQ />}/>
                <Route path='/geography' element={<Geography />}/>
                <Route path='/calendar' element={<Calendar />}/>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App