
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner';
// import API_KEY from './requests'
import Navbar from './Navbar';


function App() {
  return (
    <div className="app">
    

<Navbar/>
<Banner/>

<Row
isLargeRow={true}
 title="TRENDING MOVIES" fetchUrl={requests.fetchTrending}/>
<Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
<Row title="TOPRATED MOVIES" fetchUrl={requests.fetchTopRated}/>
<Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
<Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
<Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
<Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
<Row title="DOCUMENTARY MOVIES" fetchUrl={requests.fetchDocumentaries}/>

 </div>
  );
}

export default App;
