import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <form>
        <Link to='/'><button className="homeBt">홈으로</button></Link>
      </form>
      <h1></h1>
      <ul className='navUl'>
        <li className='navLi'>
          <p className='navP'>날씨정보 확인을 원하시면</p>
        </li>
        <li>
          <p className='navP'>
            <span className='navSpan'>'홈으로'</span> 버튼을 눌러주세요
          </p>
        </li>
      </ul>
      <h1></h1>
    </>
  );
}

export default Nav;