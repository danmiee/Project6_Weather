import {Link} from 'react-router-dom'
// Link : html에서 a태그로 나타남
// import 필수

function Nav() {
  return (  
    <nav>
      <h1>메뉴영역</h1>
      <ul>
        <li><Link to='/'>홈으로</Link></li>
        {/* Link 속성 to : 경로설정, 경로이름 임의설정 가능 */}
        <li><Link to='/p1/null'>Page1</Link></li>
        <li><Link to='/p2'>Page2</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;