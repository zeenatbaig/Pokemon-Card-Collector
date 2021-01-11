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


            {/* <Link className='btn btn-dark btn-sm my-1' > more </Link> */}



        </div>
    )
}

export default PokemonCardItem
