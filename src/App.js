import './App.css';
import Nav from './com/Nav'
import Home from './com/Home'
import WeatherMain from './com/WeatherMain'
import WeatherMain2 from './com/WeatherMain2'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wm1" element={<WeatherMain2 />} />
        <Route path="/wm2" element={<WeatherMain />} />
      </Routes>
    </>
  );
}

export default App;
