import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) =>{
      setData(users)
    })
  }, []);
  return (
    <div>
      {data.length &&
        data.map((user) => (
          <div className="card">
             <p className="show"><span>Id: </span>{user.id}</p>
             <p className="show"><span>Username: </span>{user.name}</p>
             <p className="show"><span>Email: </span>{user.email}</p>
             <p className="show"><span>Phone: </span>{user.phone}</p>
            <button className="button" onClick={()=>{navigate(`/${user.id}`)}}>Detail</button>
          </div>
        ))}
    </div>
  );
} 

export default Home;