import { Pokemon } from "../interfaces"
import { FC } from 'react'

const CardInfoPokemon: FC<Pokemon> = (pokemon) => {
    return (
        <div className="position-fixed me-5 shadow-sm cardinfopokemon bg-white rounded d-flex flex-column align-items-center">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="" />
            <p className="text-light">{pokemon.order}</p>
            <p className="fs-4 fw-bold">{pokemon.name}</p>
            <p className="fw-bold">POKEDEX ENTRY</p>
            <p></p>
        </div>
    )
}

export default CardInfoPokemon
