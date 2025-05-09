import './App.css'
import { useState , useEffect} from 'react'
import ThemeChange from './components/ThCh';
import Modal from './components/Modal';
import ModalForm from './components/ModalForm';
import Message from './components/Message';

// user saytga kirganda uning tizimidagi modni aniqlash va shu asosida htmlga data-theme atributini berish
const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
let themeData = ''
if (darkThemeMq.matches) {
  document.documentElement.setAttribute('data-theme', 'dark')
  themeData = 'dark'
} else {
  document.documentElement.setAttribute('data-theme', 'light')
  themeData = 'light'
}



function App() {
  // dark va light modelarni o'zgartirish 
  const [theme, setTheme] = useState(themeData)
  const themeChanger = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
  // modalni ochish va yopish
  const [isOpen, setIsOpen] = useState(false);
  // apidan data olish
  const [data, setData] = useState('')
  useEffect(() => {
    fetch('http://127.0.0.1:8000/users/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Tarmoq xatosi');
        }
        return response.json();
      })
      .then(apiData => {
        setData(apiData);
      })
  }, [isOpen]);

  // message 
  const [isMessage, setIsMessage] = useState(false)
  const [message, setMessage] = useState({})
  console.log(message);
  function Msg(xabar,color,vaqt){
    setMessage({
      text: xabar,
      color: color,
    })
    setIsMessage(true);
    setTimeout(() => {
        setIsMessage(false)
    }, vaqt)
  }

  // cardni o'chirish
  const deleteCard = (id) => {
    fetch(`http://127.0.0.1:8000/users/delete/${id}/`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("O'chirishda xatolik yuz berdi");
        }
        // O'chirilgan elementni interfeysdan olib tashlash
        setData((prevData) => prevData.filter((item) => item.id !== id));
        console.log(`ID ${id} bo'lgan karta o'chirildi`);
        Msg("Muvaffaqiyatli o'chdi","green",5000)

      })
      .catch((error) => {
        console.error("Tarmoq xatosi:", error);
        Msg("Xatolik yuz berdi!","red",5000)
        
      });
  }

  return (
    <>
      <div className="App">
        <ThemeChange theme={theme} themeChanger={themeChanger} />
        <h1 className='bgh'>Vite+React</h1>
        <div className='gridContainer'>
          {data && data.map((item) => {
            return(
              <div className='card' key={item.id}>
                <div className='cardHeader'>
                  <h2>{item.name}</h2>
                  <p>{item.email}</p>
                </div>
                <div className='cardBody'>
                  <p>{item.message}</p>
                  <p>{item.gender}</p>
                </div>
                <div className='cardFooter'>
                  <button className='btn' onClick={() => deleteCard(item.id)}>O'chirish</button>
                </div>

              </div>
            )
          })}
        </div>
        <button className='openModal' onClick={() => {setIsOpen(true)}}>Yangi data</button>
        { isOpen && <Modal onClose={() => setIsOpen(false)}> <ModalForm Msg={Msg} setIsOpen={setIsOpen}/> </Modal>}
        <Message message={message} isMessage={isMessage} setIsMessage={setIsMessage} />
      </div>
    </>
  )
}

export default App
