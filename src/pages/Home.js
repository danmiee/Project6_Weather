import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  
  // Object 생성(key:value)
  const url = {
    "사과": '/p2?item1=사과&item2=과일',
    "바나나": '/p2?item1=바나나&item2=과일',
    "당근": '/p2?item1=당근&item2=채소'
  }

  const handleClick = (k) => {
    navigate(url[k]);
  }
  return (
    <>
      <h1>Home</h1>

      <h2>Page1 이동</h2>
      <ul>
        <li><Link to='/p1/사과'>사과</Link></li>
        <li><Link to='/p1/바나나'>바나나</Link></li>
        <li><Link to='/p1/당근'>당근</Link></li>
      </ul>

      <h2>Page2 이동(링크)</h2>
      <ul>
        <li><Link to='/p2?item1=사과&item2=과일'>사과</Link></li>
        <li><Link to='/p1item1=바나나&item2=과일'>바나나</Link></li>
        <li><Link to='/p1item1=당근&item2=채소'>당근</Link></li>
      </ul>

      <h2>Page2 이동(이벤트)</h2>
      <button onClick={() => handleClick('사과')}>사과</button>
      <button onClick={() => handleClick('바나나')}>바나나</button>
      <button onClick={() => handleClick('당근')}>당근</button>
    </>
  );
}

export default Home;