import React from 'react'
import PokemonCards from '../components/PokemonCards'
import Nav from '../components/NavigationBar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

 const Home = (props) => {

    const {cards, name, setname, getCards} = props

   const searchItem = (event) => {
        setname(event.target.value) 
    }
    const onSubmit = (event) => {
        event.preventDefault();
       getCards()
    }
    return (

        <div>
           
            <Nav/>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users" value={name} onChange={searchItem}  ></input>
                <input type="submit" value="search" className="btn btn-dark btn-block" ></input>
            </form>

           
            <PokemonCards
                cards={cards}
            />
        </div>
    )
}

export default Home;
