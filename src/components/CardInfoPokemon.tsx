import { Pokemon } from "../interfaces"
import { FC, useRef } from 'react'
import TagType from "./TagType"
import { useDispatch } from 'react-redux'
import { addToBox } from "../features/box/boxSlice"
import soundPC from '/sounds/IntoPC.mp3'

const CardInfoPokemon: FC<Pokemon> = (pokemon) => {
    const dispatch = useDispatch();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleAddToBox = () => {
        audioRef.current?.play()
        dispatch(addToBox(pokemon));
    }

    return (
        <div className="shadow-sm cardinfopokemon bg-white rounded-4 d-flex flex-column align-items-center px-3">
            {
                pokemon.sprites.other?.home.front_default ? (
                    <img src={pokemon.sprites.other?.home.front_default} alt="" />
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
            <div className="d-flex flex-column align-items-center cardinfopokemon-data px-0 placeholder-glow">
                <p className="text-light">{`N°${pokemon.game_indices[3].game_index}`}</p>
                <p className="fs-4 fw-bold text-capitalize">{pokemon.name}</p>
                <div className="d-flex gap-2 py-2">
                    {
                        pokemon.types.map(type => <TagType name={type.type.name} />)
                    }
                </div>
                <p className="fw-bold letter-spacing-2">POKEDEX ENTRY</p>
                <p className="py-2 row gap-2 w-100 align-items-center justify-content-center text-center">{
                    pokemon.description ? pokemon.description :
                        <>
                            <span className="placeholder col-10"></span>
                            <span className="placeholder col-10"></span>
                            <span className="placeholder col-10"></span>
                        </>
                }</p>
                <p className="letter-spacing-2 fw-bold">ABILITIES</p>
                <div className="d-flex gap-2 flex-wrap align-items-center justify-content-center mb-3">
                    {
                        pokemon.abilities.map(ability => <TagAbility name={ability.ability.name} isHidden={ability.is_hidden} />)
                    }
                </div>
            </div>
            <button className="btn btn-primary shadow-sm" onClick={handleAddToBox}>Add to Box</button>
            <audio ref={audioRef} src={soundPC}></audio>
        </div>
    )
}

const TagAbility: FC<{ name: string, isHidden: boolean }> = ({ name, isHidden }) => {
    return (
        <div className={`border rounded-pill px-2 py-1 ${isHidden ? 'border-primary' : 'border-secondary'}`}>
            <p className="text-capitalize">{name}</p>
        </div>
    )
}

export default CardInfoPokemon
