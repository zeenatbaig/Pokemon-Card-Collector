import React from 'react'
import { Link } from 'react-router-dom'


const PokemonCardItem = (props) => {

    const { image, name, rarity, set } = props

    return (
        <div className="card text-center">
            <div className="card-padding">
                <h3>{name}</h3>
                <h5>{rarity}</h5>
                <h5>{set}</h5>
            </div>
            <img src={image} alt="" style={{ width: '90px' }} ></img>


            <button className='btn btn-success btn-sm my-1' > more </button>
        </div>
    )
}

export default PokemonCardItem
