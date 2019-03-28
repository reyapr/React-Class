import React, { useState } from 'react';



export default function hookExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [mobil, tambahMobil] = useState([]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <ul>
        ini mobil:
        {
          mobil.map(mobil=> mobil)
        }
      </ul>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => tambahMobil([...mobil,`toyota ${count}`])}>
        Click add mobil
      </button>
    </div>
  );
}