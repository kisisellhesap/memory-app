import React from 'react'

const CardComponent = ({ card, handleSelected, carddisabled, rotated }) => {

    const handleClick = () => {
        if (!carddisabled) {
            handleSelected(card);
        }
    }
    return (
        <div className='card-content'>
            <div className={rotated ? "rotated" : ""}>
                <img className='front' src={card.src} />
                <img className='back' onClick={handleClick} src="/img/cover.jpeg" />
            </div>


        </div>
    )
}

export default CardComponent