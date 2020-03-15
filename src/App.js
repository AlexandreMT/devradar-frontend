import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      
      const { devs } = response.data;

      setDevs(devs);
    }

    loadDevs();
  }, []);

  async function handleAddDev(body) {
    const response = await api.post('/devs', body);

    setDevs([...devs, response.data.dev]);
  }

  async function handleDeleteDev(id) {
    const response = await api.delete(`/devs/${id}`);

    const newDevs = devs.filter((dev) => dev._id !== id);
    setDevs(newDevs);

    alert(response.data.message);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>{ devs.map((dev) => <DevItem key={ dev._id } dev={dev} onClick={handleDeleteDev}/>) }</ul>
      </main>
    </div>
  );
}

export default App;
