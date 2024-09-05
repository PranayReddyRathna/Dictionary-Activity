import { useState } from 'react';
import './App.css';
import data from './data'
function App() {
  const [searchinput,setSearchinput]=useState("");
  const [founddata,setFounddata]=useState("");
  const [flag,setFlag]=useState(false);
  const handleChange=(e)=>{
    setSearchinput(e.target.value);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      const finddata=data.find((ele)=>ele.word.toLowerCase()===searchinput.toLowerCase())
      setFounddata(finddata)
      setFlag(true);
  }
  return (
    <div className="App">
     <h1>Dictionary App</h1>
     <form onSubmit={handleSubmit}>
     <input type="search" placeholder='search for a word...' onChange={handleChange}/>
     <button type="submit">Search</button>
     </form>
     <p style={{fontSize:'1.5',fontWeight:'500',marginBottom:'1rem'}}>Definition:</p>
     {flag?(founddata?(<p>{founddata.meaning}</p>):(<p>Word not found in the dictionary.</p>)):<p></p>}
    </div>
  );
}

export default App;
