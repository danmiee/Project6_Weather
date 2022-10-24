// main에서 받은 값에 따라 value 가져오기
import w from '../db/weather.json';

function WeatherDay(props) {
  
  const d = props.d;

  // props에 따라 가져오는 값의 key가 달라지므로 변수 생성
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Am`]

  let witem = w.response.body.items.item[0];

  // key에 해당하는 값만 노출하기
  const items = [];
  for (let k of keys) {
    items.push(witem[k]);
  }
  console.log(items);

  return ( 
    <>
      <ul className='detailUl'>
        <li>
          <span className='spanList'>
            {d}일 후<br />오전 강수량
          </span>
          <span className='spanData'>
            {items[0]}%
          </span>
        </li>
        <li>
          <span className='spanList'>
            {d}일 후<br />오후 강수량
          </span>
          <span className='spanData'>
            {items[1]}%
          </span></li>
        <li>
          <span className='spanList'>
            {d}일 후<br />오전 날씨예보
          </span>
          <span className='spanData'>
            {items[2]}
          </span></li>
        <li>
          <span className='spanList'>
            {d}일 후<br />오전 날씨예보
          </span>
          <span className='spanData'>
            {items[3]}
          </span></li>
      </ul>
    </>
  );
}

export default WeatherDay;