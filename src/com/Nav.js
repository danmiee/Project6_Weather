import { Link } from 'react-router-dom'

function Nav() {
  return (
      <form>
        <Link to='/'><button className="homeBt">홈으로</button></Link>
      </form>
  );
}

export default Nav;