import './App.css'
import { useState } from 'react'
import ThemeChange from './components/ThCh';
import Modal from './components/Modal';
import ModalForm from './components/ModalForm';

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
  console.log('theme', theme, setTheme)
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
  console.log(isOpen)
  
  return (
    <>
      <div className="App">
        <ThemeChange theme={theme} themeChanger={themeChanger} />
        <h1 className='bgh'>Vite+React</h1>
        <button className='openModal' onClick={() => {setIsOpen(true)}}>Yangi data</button>
        { isOpen && <Modal onClose={() => setIsOpen(false)}> <ModalForm/> </Modal>}
      </div>
    </>
  )
}

export default App
