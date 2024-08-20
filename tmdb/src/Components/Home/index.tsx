import { Box } from '@mui/material'
import React from 'react'
import Header from '../Header'
import Trending from '../Trending'
import PopularMovieCarousel from '../MovieCarousel'

const Home = () => {
  return (
    <Box sx={{background:"black"}} pb={4}>
        <PopularMovieCarousel /> 
        <Box>
        <Trending />
        </Box>
    </Box>
  )
}

export default Home