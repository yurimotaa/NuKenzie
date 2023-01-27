import '../List/style.css'
import { useState } from 'react'
import rectangle from '../../assets/rectangle.png'

export function List({ cards, setCards }){
    function handleClick(event){
 
        const newCards = cards.filter((card) => {
            return card.id != event.target.id
        })


        setCards(()  => newCards)
    }

    if(cards.length > 0){
        return (
            <ul className="list__container">
                <p>Resumo financeiro</p>
                
                {cards.map((card) => {
                    if(card.type == 'entrada'){
                        return(
                            <li key={card.id} className="list__card--entrys">
                                <div>
                                    <p>{card.description.substring(0,1).toUpperCase().concat(card.description.substring(1))}</p>
                                    <span>R$ {card.value},00</span>
                                    <button id={card.id} onClick={handleClick} type="button">Excluir</button>
                                </div>
                                <span>{card.type.substring(0,1).toUpperCase().concat(card.type.substring(1))}</span>
                            </li>

                        )

                    } else if(card.type == 'saida'){
                        return(
                        <li key={card.id} className="list__card--exits">
                        <div>
                            <p>{card.description.substring(0,1).toUpperCase().concat(card.description.substring(1))}</p>
                            <span>R$ {card.value},00</span>
                            <button id={card.id} onClick={handleClick} type="button">Excluir</button>
                        </div>
                        <span>{card.type.substring(0,1).toUpperCase().concat(card.type.substring(1))}</span>
                    </li>

                        )
                    }

                })}


            </ul>
        )
    } else {
        return (
            <ul className="list__container">
                <p>Você ainda não possui nenhum lançamento</p>
                <img src={rectangle} alt="empty" />
                <img src={rectangle} alt="empty" />
                <img src={rectangle} alt="empty" />
            </ul>
        )
    }
}