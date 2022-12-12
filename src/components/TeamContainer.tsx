import { useState } from 'react';

const TeamContainer = () => {
    return (
        <div className="p-3 d-flex gap-3 rounded bg-white shadow-sm">
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
        </div>
    )
}

const TeamMember = () => {
    const [pokemonPartner, setPokemonPartner] = useState();

    return (
        <div className="d-flex bg-white shadow-sm teamMember-button rounded align-items-center justify-content-center">
            {
                pokemonPartner ? (
                    <p>OK</p>
                ) : (
                    <p className='text-center fs-1 m-0'>+</p>
                )
            }
        </div>
    )
}


export default TeamContainer
