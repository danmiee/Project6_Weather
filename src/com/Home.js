function Home() {
  return (
    <>
      <h1>일기예보</h1>
      <form className="homeForm">
        <button className="weatherM">단기예보</button>
        <button className="weatherM">중기예보</button>
      </form>
    </>
  );
}

export default Home;