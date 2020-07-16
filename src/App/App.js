import React, {useState,useEffect} from 'react';
import './App.css';
import Home from '../Home/Home';

function App() {
  const [initialPetData, setInitialPetData] = useState({})

  useEffect(()=>{
    fetch('/pets').then(
      response => response.json()
      ).then(data => {
        console.log(data)
        setInitialPetData(data)
      })
  },[])
  //the [] makes it not fire off repeatedly. useEffect is essentially component did mount
  return (
    <div className="App">
      <p>hello</p>
    <h1>{initialPetData.title}</h1>
    </div>
  );
}

export default App;
