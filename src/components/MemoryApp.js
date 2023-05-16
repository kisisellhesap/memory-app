import React, { useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent';
import CcontainerComponent from './CcontainerComponent';


const imgArr = [
    {
        src: "/img/1.jpeg", matched: false
    },
    {
        src: "/img/2.jpeg", matched: false
    },
    {
        src: "/img/3.jpeg", matched: false
    },
    {
        src: "/img/4.jpeg", matched: false
    },
    {
        src: "/img/5.jpeg", matched: false
    },
    {
        src: "/img/6.jpeg", matched: false
    },
    {
        src: "/img/7.jpeg", matched: false
    },
    {
        src: "/img/8.jpeg", matched: false
    }
]

const MemoryApp = () => {

    const [cardList, setCardList] = useState([]);
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);
    const [carddisabled, setCardDisabled] = useState(false);


    const cardLoop = () => {

        const sortedCards = [...imgArr, ...imgArr].sort(() => 0.5 - Math.random()).map((card) => ({ ...card, id: Math.random() }));
        setCardList(sortedCards);
        setCardOne(null);
        setCardTwo(null);
    }

    useEffect(() => {
        cardLoop();
    }, []);
    useEffect(() => {
        if (cardOne && cardTwo) {
            setCardDisabled(true);
            if (cardOne.src === cardTwo.src) {
                setCardList(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === (cardOne.src || cardTwo.src)) {
                            return { ...card, matched: true }
                        }
                        else {
                            return card;
                        }
                    })
                })

                resetState();

            } else {
                setTimeout(() => {
                    resetState();
                }, 1000);
            }


        }

    }, [cardOne, cardTwo]);

    const resetState = () => {
        setCardOne(null);
        setCardTwo(null);
        setCardDisabled(false);

    }

    const handleSelected = (card) => {
        cardOne ? setCardTwo(card) : setCardOne(card);
    }




    return (
        <div className='memory-app'>
            <HeaderComponent cardLoop={cardLoop} />
            <CcontainerComponent cardList={cardList} handleSelected={handleSelected} carddisabled={carddisabled} cardOne={cardOne} cardTwo={cardTwo} />
        </div>
    )
}

export default MemoryApp;