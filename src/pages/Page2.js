import { useLocation } from 'react-router-dom'
import qs from 'query-string'

function Page2() {
  const loc = useLocation().search;
  console.log('loc=' + loc);
  const q = qs.parse(loc);
  console.log(q);

  // let loc2 = loc.replace('?', "").split('&')
  // loc2 = loc2.map((m) => m.split('=')[1])
  // console.log('loc2='+loc2);

  return (
    <>
      <h1>Page2</h1>
      {Object.keys(q).length === 0 ?
        <p>선택항목이 없습니다.</p>
        : <h2>{q.item1}({q.item2})</h2>}
    </>
  );
}

export default Page2;