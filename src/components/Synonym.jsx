import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Synonym({mean}) {
  return (
  <div  className='flex__container' style={{justifyContent:'flex-start',columnGap:'2rem'}}>
        {mean.map(res=>res.meanings
        .map(m=>m.definitions
        .map(def=>def.synonyms?.map((syn, id)=><div key={id} className='list'>
            <HiOutlineArrowNarrowRight className='result__icon' /> {syn} </div>
        )
    )) 
    )}
    </div>)
}

export default Synonym;
