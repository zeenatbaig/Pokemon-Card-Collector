import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Home from './layout/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [cards, setCards] = useState([]);

  //get cards for home page

  const getCards = async () => {

    let res = await axios.get("https://api.pokemontcg.io/v1/cards?name=pikachu")
    setCards(res.data.cards)
  }

  useEffect(() => {
    getCards();

    // eslint-disable-next-line
  }, [])

  //get single card

  const getSingleCard = async (cardId) => {
    let res = await axios.get("https://pokemontcg.io/cards/ecard3-146")
  }


  return (
    <div className="App">
      <Home
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
}

export default App;
