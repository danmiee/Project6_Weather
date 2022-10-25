import item from '../db/item.json'
import weather2 from '../db/weather2.json'
import '../com/weather.css'

function WeatherMain2() {

  // 강수형태
  const pty = {
    "0": "없음", "1": "비", "2": "비/눈", "3": "눈",
    "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림"
  };

  // json파일에서 w2 형태확인 : 배열
  let w2 = weather2.response.body.items.item;

  // lis라는 object로 8개의 값을 넣어주고 싶음
  // > 배열로 생성 : map을 활용하여 코드 단축 가능
  // map함수 안에 들어가는 콜백함수는 바로 리턴
    // 조건 필요 시 삼항연산자 사용
    // 삼항연산자 안에서 삼항연산자 사용가능
  let lis = w2.map((m) =>
    // console.log로 m값 확인하고 코드 작성
    // PTY 값을 코드값이 아닌 Value로 나타내기 위해 삼항연산자 사용
    (m.category === 'PTY') ?
      (<li key={m.category}>
        <span className='spanList'>
          {item[m.category][0]}
        </span>
        <span className='spanData'>
          {/* PTY에서는 키-값으로 이루어진 const pty값을 가져옴 */}
          {/* pty의 키는 m.obsrValue */}
          {pty[m.obsrValue]}
        </span>
      </li>)
      // PTY가 아닌 것들은 w2 데이터 그대로 가져옴
      : (<li key={m.category}>
        <span className='spanList'>
          {/* item[m.category]가 배열이기 때문에 인덱스를 분리 작성 */}
          {item[m.category][0]}
        </span>
        <span className='spanData'>
          {m.obsrValue}
          {item[m.category][1]}
        </span>
      </li>)
  );

  return (
    <>
      <h1>날씨예보 - 단기정보</h1>
      <ul className="detailUl">
        {lis}
      </ul>
    </>
  );
}

export default WeatherMain2;