import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function meaning({mean}) {
  return mean.map(res=>res.meanings.map(m=>m.definitions.map((def, id)=>
            <div key={id} className='result__text'>
            <HiOutlineArrowNarrowRight className='result__icon' /> {def.definition} </div>
        ))
    );
}

export default meaning;
