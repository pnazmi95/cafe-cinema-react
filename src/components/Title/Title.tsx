import React from 'react';

function Title(): JSX.Element {
    return (
        <header className='bg-light-primary flex justify-center items-center dark:bg-dark-primary h-16'>
            <h1 className='uppercase text-3xl font-bold  dark:text-dark-heading'>Cafe Cinema</h1>
        </header>
    );
}

export default Title;