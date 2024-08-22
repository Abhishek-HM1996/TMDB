import { Box } from '@mui/material'
import Trending from './Trending'
import PopularMovieCarousel from '../MovieCarousel'
import ProtectedRoute from '../ProtectedHoc'

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

export default ProtectedRoute(Home);