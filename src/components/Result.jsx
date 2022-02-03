import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { InputContext } from '../App';
import reading from '../asset/img/reading.png';
import Meaning from './Meaning';
import Example from './Example';
import Synonym from './Synonym';
import Antonym from './Antonym';
import Loading from './Loading';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


function Result() {
    const { inputValue }= useContext(InputContext);
    const [data, setdata] = useState(null);
  
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const [defaultImage, setdefaultImage] = useState(true);
  
    const fetchData= async (param)=>{
      try {
        setdefaultImage(false)
        setloading(true)
        const res = await axios(`/${param}`);
        setdata(res.data);
      } catch (error) {
        seterror(error);
      } finally {
        setloading(false);
      }
    }

useEffect(() => {
  if (inputValue.length) {
      fetchData(inputValue)
  }
}, [inputValue]);


if (loading) {
    return <div className='flex__container'><Loading /></div>;
}


if (data) {
    return (
      

        <div>

        <div className='result__wrapper'> 
            <div className='result__title'>
                Meaning & Definitions:
            </div>
            <Meaning mean={data} />
        </div>
        <div className='result__wrapper'> 
            <div className='result__title'>
                Examples:
            </div>
            <Example mean={data} />
        </div>
        <div className='result__wrapper'> 
            <div className='result__title'>
                Synonyms:
            </div>
              <Synonym mean={data} />
        </div>
        <div className='result__wrapper'> 
            <div className='result__title'>
                Antonyms:
            </div>
              <Antonym mean={data} />
        </div>
  </div>
    );
}

if (error) {
    return <div className='flex__container'>Error: not found. </div>;
}

  return defaultImage  && <div className='flex__container'><img className='section__img' src={reading} alt='avatar' /></div>
}

export default Result;
