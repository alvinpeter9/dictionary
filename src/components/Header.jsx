import { useContext, useState } from 'react';
import { InputContext } from '../App';
import dictionary from '../asset/img/dictionary.png';

function Header() {
  const [value, setValue] = useState('');
  const { inputValue, setInputValue } = useContext(InputContext);

  const submitHandler = (e) =>{
      e.preventDefault();
      setInputValue(value);
      setValue('');
  };

  return (
    <header>
    <div className='flex__container'>
      
      <img src={dictionary} alt='dict' className='header__img' />

      <div className='header__text'>
        <div className='header__title'>SMART ENGLISH DICTIONARY </div>
        <div className='header__subtitle'>your personal word asistant</div>
      </div>
    </div>
      <div className='flex__container'>
        <form onSubmit={submitHandler}>
          <input type='text' name="search" value={value}
            onChange={e=>setValue(e.target.value)}
            placeholder="Enter a word to see the meaning" />
          <button>Search</button>
        </form> 
        <div className='header__word-name'>
        {inputValue && inputValue } </div>
      </div>
    </header>
  )
}

export default Header;
