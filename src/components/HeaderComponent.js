import React from 'react';


const HeaderComponent = ({ cardLoop }) => {
    return (
        <div className='header'>
            <h1>MemoryApp</h1>
            <button onClick={cardLoop}>Oyunu Başlat</button>
        </div >
    )
}

export default HeaderComponent;