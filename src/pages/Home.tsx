import Searchbar from "../components/Searchbar"
import CardPokemon from "../components/CardPokemon"
import CardInfoPokemon from "../components/CardInfoPokemon"
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Pokedex, Pokemon } from "../interfaces";

const Home = () => {

    const [pokedex, setPokedex] = useState<Pokedex>();
    const [pokes, setPokes] = useState<Pokemon[]>([]);
    const [pokeSelected, SetPokeSelected] = useState<Pokemon>();

    useEffect(() => {
        const getPokedex = async () => {
            const axiosGet: Pokedex = await (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')).data;
            setPokedex(axiosGet);

            if (axiosGet) {
                console.log('ENTRY')
                const axiosGetArray = await axios.all(axiosGet.results.map(result => axios.get(result.url)));
                setPokes(axiosGetArray.map(response => response.data));
            }
        }
        getPokedex();
    }, [])


    return (
        <div className="row">
            <div className="col-9">
                <div className="pe-3">
                    <Searchbar />
                    <div className="d-flex flex-wrap gap-3">
                        {
                            pokes.map(poke => <CardPokemon {...poke} />)
                        }
                    </div>
                </div>
            </div>
            <div className="col-3">
                {
                    pokeSelected && <CardInfoPokemon {...pokeSelected} />
                }
            </div>
        </div>
    )
}
export default Home
