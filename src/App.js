import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import ScrollToTop from './components/scrollToTop/ScrollToTop';



function App() {
  return (
    <Box width="600px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Box>
  );
}

export default App;
