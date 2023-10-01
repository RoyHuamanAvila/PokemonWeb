import Searchbar from "../components/Searchbar"
import CardPokemon from "../components/CardPokemon"
import CardInfoPokemon from "../components/CardInfoPokemon"
import { useSelector } from 'react-redux'
import { RootState } from "../app/store"
import React, { useState } from "react"

const Home = () => {
    const pokedex = useSelector((state: RootState) => state.pokedex);
    const { pokesInPokedex, pokeSelected } = pokedex;
    const [searchPokemon, setSearchPokemon] = useState('')

    const handleSearchPokemon = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchPokemon(e.currentTarget.value.toLowerCase())
    }

    return (
        <div className="row">
            <div className="col-9">
                <div className="d-flex flex-column gap-3">
                    <Searchbar handleSearchPokemon={handleSearchPokemon} />
                    <div className="d-flex flex-wrap pokedex-list pt-5 py-3">
                        {
                            pokesInPokedex && pokesInPokedex
                                .filter(poke => poke.forms[0].name.includes(searchPokemon))
                                .map(poke => <CardPokemon key={poke.id} {...poke} />)
                        }
                    </div>
                </div>
            </div>
            <div className="col-3 d-flex flex-column justify-content-center">
                {
                    pokeSelected && <CardInfoPokemon {...pokeSelected} />
                }
            </div>
        </div>
    )
}
export default Home
