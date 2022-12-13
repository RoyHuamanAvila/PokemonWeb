import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { FC } from 'react'
import { Pokemon } from '../interfaces';
import { deleteToBox } from '../features/box/boxSlice';

const Box = () => {
    const box = useSelector((state: RootState) => state.box);


    return (
        <div className="row">
            <div className="col-7">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="rounded-4 bg-white shadow-sm py-2 px-5">
                        <p className="text-center fw-bold">Box 1</p>
                    </div>
                </div>
                <div className="d-flex gap-3 flex-wrap p-3">
                    {
                        box.pokemons.map((slot, index) => <Slot key={slot.id} index={index} pokemon={slot} />)
                    }
                </div>
            </div>
            <div className="col-5"></div>
        </div>
    )
}

const Slot: FC<{ pokemon: Pokemon, index: number }> = ({ pokemon, index }) => {
    const dispatch = useDispatch();
    return (
        <div className="position-relative d-flex align-items-center justify-content-center box-slot rounded shadow-sm">
            <img src={pokemon?.sprites.versions?.['generation-v']['black-white'].animated?.front_default} alt="" />
            <button className='btn-close position-absolute top-0 end-0 bg-primary' type='button' title='Delete' onClick={() => dispatch(deleteToBox(index))}></button>
        </div>
    )
}


export default Box
