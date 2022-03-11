import type { NextPage } from 'next'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Shell from '../components/Shell'

const Home: NextPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Shell />
    </Box>
  )
}

export default Home
