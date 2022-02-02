import { createContext, useState } from 'react';
import { FaCopyright, FaDev } from 'react-icons/fa';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';

export const InputContext = createContext();


function App() {
 const [inputValue, setInputValue] = useState('');

 const value = {
  inputValue, setInputValue
 }



  return (
    <InputContext.Provider value={value}>
    <Header />
    <section>
      <div className="section__card">

        <Result />

      </div>
    </section>
    <footer> 

    <div className='footer__text'><FaCopyright />  All rights reserved {new Date().getFullYear()}</div>

    <div className='flex__container' style={{justifyContent:'flex-start', width:'100%'}}>
    <span className='line'></span> 
    <span className='footer__dev'><FaDev className='footer__icon' /> Alvin</span></div>

    </footer>
    </InputContext.Provider>
  );
}

export default App;
