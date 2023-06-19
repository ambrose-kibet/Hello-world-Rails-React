import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const [data, setData] = useState(null)
  const getGreeting = async() => {
   await axios("/greetings").then(res=>setData(res.data)).catch(err=>console.log(err))
  }
  return (
    <div>
      <h1>Hello world</h1>
      <button>change greeting</button>
    </div>
  )
}
export default Greetings