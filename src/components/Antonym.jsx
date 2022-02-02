import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Antonym({mean}) {
  return (
  <div  className='flex__container' style={{justifyContent:'flex-start',columnGap:'2rem'}}>
    {mean.map(res=>res.meanings
        .map(m=>m.definitions
        .map(def=>def.antonyms.map((antonym, id)=>
            <div key={id} className='list'>
            <HiOutlineArrowNarrowRight className='result__icon' /> {antonym} </div>
        ))
    )
    )}
    </div>
    )
}

export default Antonym;
