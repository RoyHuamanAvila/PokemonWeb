import Header from "./components/Header"
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { PokedexData } from "./interfaces";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { enterData, enterPokemons } from "./features/pokedex/pokedexSlice";
import { createBox } from "./features/box/boxSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPokedex = async () => {
      const axiosGet: PokedexData = await (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')).data;
      dispatch(enterData(axiosGet));

      if (axiosGet) {
        const axiosGetArray = await axios.all(axiosGet.results.map(result => axios.get(result.url)));
        dispatch(enterPokemons(axiosGetArray.map(response => response.data)));
      }
    }
    dispatch(createBox())
    getPokedex();
  }, [])

  return (
    <div className="App">
      <div className="container pt-3">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
