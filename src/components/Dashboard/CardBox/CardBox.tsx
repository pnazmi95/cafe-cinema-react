import React from 'react';
interface Props {
  title: string;
  number: string;
}

const Hello: React.FC<Props> = ({  title  , number}) => {
  return (
       <div className='box w-52 h-2/5 bg-light-secondary p-5 rounded-lg	 dark:bg-dark-secondary dark:text-dark-heading'> 
            <h1>{title}</h1>
            <span className='color-secondary dark:bg-dark-secondary dark:text-dark-heading'>{number}</span>
       </div>    
     );
};

export default Hello;