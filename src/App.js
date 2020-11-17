import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);
  const [newTech, setNewTech] = useState(''); 

  function handleAdd(){
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        { tech.map(t => <li key={t}>{t}</li>) }
      </ul>
      <input onChange={e => setNewTech(e.target.value)}></input>
      <button type='button' onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
