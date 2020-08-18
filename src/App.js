import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchtrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.FetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.FetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.FetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.FetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.FetchDocumentaries} />
    </div>
  );
}

export default App;
