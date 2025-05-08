import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import ModalForm from './components/Modalform';
import Saves from './components/Saves';



function App() {
  const [modal, setModal] = useState(true);
  const [data, setData] = useState([]);

  const newData = (newdata) => {
    if (!newdata.name || !newdata.email || !newdata.message) {
      alert("Iltimos bo'sh joylarni to'ldiring");
      return;
    }
    else{
      setData((prev) => [...prev, newdata]);
    }
  }

  const Btn_modal = () => {
    setModal(!modal);
  }

  return (
    <div className="App">
      <div className="container">
        <Saves saves={data} />
        <button onClick={Btn_modal}>Modal</button><br></br>
        {modal && <Modal Btn_modal={Btn_modal} >
          <ModalForm onClose={setModal} newData={newData}/>
        </Modal>}
      </div>

    </div>
  );
}

export default App;
