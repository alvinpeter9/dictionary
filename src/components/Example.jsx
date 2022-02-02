import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Example({mean}) {
  return mean.map(res=>res.meanings.map(m=>m.definitions.map((def, id)=>(
    <div key={id} className='result__text'>
    {def.example && <><HiOutlineArrowNarrowRight className='result__icon' />
    {def.example}</> }</div>
))
)
);
}

export default Example;