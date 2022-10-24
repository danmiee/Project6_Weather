// 원하는 정보의 key를 WeatherDay로 전송
import WeatherDay from "./WeatherDay";
import { useState } from "react";
import './weather.css'

function WeatherMain() {

  // WeatherDay 속성으로 day부여 : 변경될 때 재랜더링 실행
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    setDay(d);
  }

  return (
    <>
      <h1>날씨예보</h1>
      <form>
        <button className="homeBt">홈으로</button>
      </form>
      <form className="btForm">
        <button className="wmBt"
          onClick={((e) => { e.preventDefault(); handleClick(3); })}>
          3일 후 날씨
        </button>
        <button className="wmBt"
          onClick={((e) => { e.preventDefault(); handleClick(4); })}>
          4일 후 날씨
        </button>
        <button className="wmBt"
          onClick={((e) => { e.preventDefault(); handleClick(5); })}>
          5일 후 날씨
        </button>
        <button className="wmBt"
          onClick={((e) => { e.preventDefault(); handleClick(6); })}>
          6일 후 날씨
        </button>
      </form>
      {/* 속성값 부여 > WeatherDay에서 props 사용가능 */}
      <WeatherDay d={day} />
    </>
  );
}

export default WeatherMain;