import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import DisplayMessages from './components/DisplayMessages'
import Header from './components/Header';


function App() {
  const [attr, setAttr] = useState('');

  const releaseAttr = (value) => {
    setAttr(value);
  };

  return (
    <>
      <Header />
      <div className='home'>
        <DisplayMessages attr={attr}></DisplayMessages>
        <TextInput releaseAttr={releaseAttr}></TextInput>
      </div>
    </>
  )
}

export default App
