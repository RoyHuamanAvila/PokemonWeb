import Pikachu_Icon from "./ico-components/Pikachu-Icon"
import { NavLink } from "react-router-dom"
import { FC, ReactNode } from 'react'
import Pokeball_Icon from "./ico-components/Pokeball-Icon"
const Header = () => {
    return (
        <nav className="shadow-sm rounded w-100 bg-white mb-3 d-flex gap-4 align-items-center px-4 ">
            <ItemNav to="/" name="Home">
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
        <NavLink to={to} className="item-nav d-flex align-items-center gap-2 text-decoration-none">
            {children}
            <p className="fw-bold m-0">{name}</p>
        </NavLink>
    )
}

export default Header
