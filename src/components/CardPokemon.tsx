import { FC } from 'react';
import { Pokemon } from '../interfaces';

const CardPokemon: FC<Pokemon> = (pokemonData) => {
    return (
        <div className="text-capitalize py-4 shadow-sm position-relative poke-card d-inline-block rounded-5 d-flex flex-column align-items-center">
            <input type="radio" title='Pokemon' name='radio' />
            <img src={pokemonData.sprites.versions?.['generation-v']['black-white'].animated?.front_default} alt="" />
            <p className="mt-3 pb-2 text-light fw-bold">{`N°${pokemonData.game_indices[3].game_index}`}</p>
            <p className="pb-2 fw-bold">{pokemonData.forms[0].name}</p>
            <div className="d-flex gap-2">
                {
                    pokemonData.types.map(type => <TagType name={type.type.name} />)
                }
            </div>
        </div>
    )
}

const TagType: FC<{ name: string }> = ({ name }) => {
    return (
        <div className={`text-center rounded fw-bold p-2 bg-${name}`}>
            {name}
        </div>
    )
}

export default CardPokemon
