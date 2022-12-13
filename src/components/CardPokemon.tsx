import { FC } from 'react';
import { Pokemon } from '../interfaces';
import { useDispatch } from 'react-redux';
import { fetchPokeSelect, selectPokemon } from '../features/pokedex/pokedexSlice';
import TagType from './TagType';
import { AppDispatch } from '../app/store';

const CardPokemon: FC<Pokemon> = (pokemon) => {
    const dispatch = useDispatch<AppDispatch>()

    const handleGetData = () => {
        if (!pokemon.description) {
            dispatch(fetchPokeSelect(pokemon));
        }
        dispatch(selectPokemon(pokemon));
        console.log(pokemon.description);
    }

    return (
        <div className="text-capitalize py-4 shadow-sm position-relative poke-card d-inline-block rounded-5 d-flex flex-column align-items-center">
            <input type="radio" title='Pokemon' name='radio' onChange={handleGetData} />
            <img src={pokemon.sprites.versions?.['generation-v']['black-white'].animated?.front_default} alt="" />
            <p className="mt-3 pb-2 text-light fw-bold">{`N°${pokemon.game_indices[3].game_index}`}</p>
            <p className="pb-2 fw-bold">{pokemon.forms[0].name}</p>
            <div className="d-flex gap-2">
                {
                    pokemon.types.map((type, index) => <TagType key={index} name={type.type.name} />)
                }
            </div>
        </div>
    )
}


export default CardPokemon
