import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Home from './layout/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [cards, setCards] = useState([]);
  const [name,setname] = useState("");
  //get cards for home page

  const getCards = async () => {

    let res = await axios.get("https://api.pokemontcg.io/v1/cards?name=" + name)
    setCards(res.data.cards)
  }

  useEffect(() => {
  

    // eslint-disable-next-line
  }, [])


  return (

    <div className="App">
     
      <Home 
        getCards = {getCards} 
        name = {name}
        setname = {setname}
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
}

export default App;
