import React from 'react'
import PokemonCard from './PokemonCardItem'


 const PokemonCards = (props) => {


    const {cards} = props

    return (
        <div style={userStyle} >

            {cards.map((card) => {
                return <PokemonCard
                    key={card.id}
                    id={cards.id}
                    image={card.imageUrl}
                    name={card.name}
                    rarity={card.rarity}
                    set={card.set}

                />
            })}

        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: "1rem"
}

export default PokemonCards
