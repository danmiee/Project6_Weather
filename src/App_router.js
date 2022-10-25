import './App.css';
import Nav from './pages/Nav'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p1/:item" element={<Page1 />} />
        {/* item 입력없이 접근하게 되면 console창에
        No routes matched location "/p1"
        발생 */}
        <Route path="/p2" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
