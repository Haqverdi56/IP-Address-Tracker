import axios from "axios"
import { useEffect, useState } from "react"
import { FiChevronRight } from 'react-icons/fi'
import Info from "./components/Info";
import Map from "./components/Map";

function App() {
  const [location, setLocation] = useState({ lat: 40.3909, lng: 49.8759 });
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const fetchData = async() => {
    await axios.get(`https://ipapi.co/${search}/json/`)
    .then(res => {
      setLocation({ lat: res.data.latitude, lng: res.data.longitude })
      setData(res.data);
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  const formSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://ipapi.co/${search}/json/`)
    .then(res => {
      setLocation({ lat: res.data.latitude, lng: res.data.longitude })
      setData(res.data);
    })
    .catch(err => {
      alert("Invalid IP Address")
    })
  } 
  return (
    <div className="App">
      <header className="header">
        <h1>IP Address Tracker</h1>
        <form className="form" onSubmit={(e)=> formSubmit(e)}>
          <input onChange={(e)=>setSearch(e.target.value)} type="text" className="searchInput" defaultValue={search} placeholder="Search IP"/>
          <button type="submit" className="searchButton"><FiChevronRight/></button>
        </form>
        {
          data && <Info data={data}/>
        }
      </header>
      {
        data.latitude == undefined ?  <h1 className="invalidError">Invalid IP Address</h1> :
        data && 
        <div className="leaflet">
          <Map data={data} location={location}/>
        </div>
      }
    </div>
  )
}

export default App
