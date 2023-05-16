import React from 'react'
import CardComponent from './CardComponent';
const CcontainerComponent = ({ cardList, handleSelected, carddisabled, cardOne, cardTwo }) => {
    return (

        <div className='card-containers'>

            {cardList.map((card) => {
                return (
                    <CardComponent key={card.id} card={card} handleSelected={handleSelected} carddisabled={carddisabled} rotated={card === cardOne || card === cardTwo || card.matched} />
                )
            })}




        </div>








    )
}

export default CcontainerComponent