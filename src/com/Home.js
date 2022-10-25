import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>일기예보</h1>
      <form className="homeForm">
        <Link to="/wm1"><button className="weatherM">단기예보</button></Link>
        <Link to="/wm2"><button className="weatherM">중기예보</button></Link>
      </form>
    </>
  );
}

export default Home;