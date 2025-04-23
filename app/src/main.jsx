import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Listagem from './components/Listagem.jsx'
import Detalhes from './components/Detalhes.jsx'

function Principal() {
  const [users, setUsers] = useState([]);
  const [userSelecionado, setUserSelecionado] = useState({});

  useEffect(() => {
    // console.log("renderizou");
    fetch("http://localhost:9000/users/get")
    .then(r => r.json())
    .then(d => {
      // console.log(d);
      setUsers(d);
    });
  }, []);


  return <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/usuarios" element={<Listagem users={users} />} />
        <Route path="/crud" element={<App users={users} setUsers={setUsers} setUserSelecionado={setUserSelecionado}/>} />
        <Route path="/detalhes" element={<Detalhes userSelecionado={userSelecionado}/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
}

createRoot(document.getElementById('root')).render(
  <Principal />
)
