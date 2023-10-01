import { NavLink } from "react-router-dom"
import { FC, ReactNode } from 'react'
import Pikachu_Icon from "../ico-components/Pikachu-Icon"
import Pokeball_Icon from "../ico-components/Pokeball-Icon"
import './Header.scss'

const Header = () => {
    return (
        <nav className="shadow-sm rounded-3 w-100 bg-white mb-4 d-flex align-items-center px-3 gap-3">
            <ItemNav to="/" name="Pokedex">
                <Pikachu_Icon />
            </ItemNav>
            <ItemNav to="/box" name="Box">
                <Pokeball_Icon />
            </ItemNav>
        </nav>
    )
}

const ItemNav: FC<{ children: ReactNode, name: string, to: string }> = ({ children, name, to }) => {
    return (
        <NavLink to={to} className="item-nav d-flex px-2 align-items-center gap-2 text-decoration-none">
            {children}
            <p className="fw-bold m-0">{name}</p>
        </NavLink>
    )
}

export default Header
