import { FC } from "react"
import Pokeball_Icon from "./ico-components/Pokeball-Icon"

const Searchbar: FC<{ handleSearchPokemon: (e: React.FormEvent<HTMLInputElement>) => void }> = ({ handleSearchPokemon }) => {
    return (
        <form className="pb-3">
            <div className="bg-white rounded py-2 px-4 overflow-hidden shadow-sm d-flex align-items-center justify-content-between">
                <input className="border-0 py-2" type="text" placeholder="Search your Pokemon!" onChange={handleSearchPokemon} />
                <button title="Search" type="button" className="btn-search border-0 shadow-sm rounded bg-primary fill-white d-flex align-items-center">
                    <Pokeball_Icon />
                </button>
            </div>
        </form>
    )
}

export default Searchbar
