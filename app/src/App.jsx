import { useState } from 'react';
import './App.css'
import DataList from './components/DataList'
import Cadastro from './components/Cadastro';
import Modal from './components/Modal';

function App({users, setUsers, setUserSelecionado}) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [userClicked, setUserClicked] = useState(false);

  // function clicked(user) {
  //   setUserClicked(user);
  //   setIsModalOpen(true);
  // }

  // function close() {
  //   setUserClicked(null);
  //   setIsModalOpen(false);
  // }


  return <>
    <div className='users_crud'>
      <Cadastro users={users} setUsers={setUsers} />
      <DataList
        setUserSelecionado={setUserSelecionado}
        users={users} setUsers={setUsers}
      />
    </div>
    {/* {isModalOpen && <Modal userClicked={userClicked} close={close}/>} */}
  </>
}

export default App
