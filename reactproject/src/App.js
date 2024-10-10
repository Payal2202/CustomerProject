import axios from "axios";
import React ,{useEffect, useState} from "react";
import './App.css';
import { Link } from "react-router-dom";

function App() {
  const [coulmns, setCoulmns] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() =>  {
    axios.get('http://localhost:3030/user')
    .then(res => {
      setCoulmns(Object.keys(res.data[0]))
      setRecords(res.data)
    })

  },[])


  return (
    <div className="container mt-5">
      <div className="text-end"><Link to ="/create" className="btn btn-primary">Add +</Link></div>
       <table className="table">
        <thead>
          <tr>
            {coulmns.map((c,i) =>(
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {
              records.map((d,i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.Name}</td>
                </tr>
              ))
            }
        </tbody>

       </table>
    </div>
  );
}

export default App;
