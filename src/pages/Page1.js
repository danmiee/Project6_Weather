import { useParams } from 'react-router-dom'

function Page1() {
  const params = useParams();
  const item = params.item;
  // Home.js path 설정 시 사용한 key와 동일하게 기재

  return (  
    <>
      <h1>Page1</h1>
      {(item === 'null') ?
        <p>선택항목이 없습니다.</p>
        : <h2> {item} </h2>}
    </>
  );
}

export default Page1;