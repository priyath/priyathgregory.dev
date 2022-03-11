import type { NextPage } from 'next'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import ResponsiveDrawer from '../components/ResponsiveDrawer'

const Home: NextPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ResponsiveDrawer />
    </Box>
  )
}

export default Home
