import React, { useState, useEffect, useMemo, useCallbacks, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState(''); 

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech])

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if(storageTech){
      setTech(JSON.parse(storageTech))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);
//o useEffect recebe dois parametros: a funçao q vai ser executada
//e quando ela vai ser executada (o segundo é um array de dependencias)

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        { tech.map(t => <li key={t}>{t}</li>) }
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input onChange={e => setNewTech(e.target.value)}></input>
      <button type='button' onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
