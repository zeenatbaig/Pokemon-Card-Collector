import React from 'react'
import PokemonCards from '../components/PokemonCards'
import Nav from '../components/NavigationBar'

 const Home = (props) => {

    const {cards} = props

    return (
        <div>
            <Nav/>
            <PokemonCards
                cards={cards}
            />
        </div>
    )
}

export default Home;
