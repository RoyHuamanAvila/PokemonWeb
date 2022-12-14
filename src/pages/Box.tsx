import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { FC, useEffect } from 'react'
import { Pokemon, Slot } from '../interfaces';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { changeSlot } from '../features/box/boxSlice';

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
                        box.slots.map(slot => <SlotBox {...slot}>
                            {
                                slot.pokemon && <PokemonInBox {...slot.pokemon} />
                            }
                        </SlotBox>)
                    }
                </div>
            </div>
            <div className="col-5">
            </div>
        </div>
    )
}

const SlotBox: FC<Slot> = ({ index, children }) => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'POKEMON',
        drop: () => ({ slot: index }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return (
        <div
            ref={drop}
            className={`
                position-relative
                d-flex
                align-items-center
                justify-content-center
                box-slot rounded
                shadow-sm
                ${isOver && 'border border-primary'}`}
            data-testid='dustbin'>
            {
                children
            }
        </div>
    )
}

const PokemonInBox: FC<Pokemon> = (pokemon) => {
    const dispatch = useDispatch()

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'POKEMON',
        item: { name: `Pokemon in Slot ${pokemon?.box?.slot}` },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<{ slot: number }>()
            if (pokemon?.box?.slot === undefined || dropResult?.slot === undefined) return
            dispatch(changeSlot({ current: pokemon?.box?.slot, destiny: dropResult?.slot, pokemon }))
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        })
    }))

    return (
        <img ref={drag} className={isDragging ? 'isDragging' : ''} src={pokemon.sprites.versions?.['generation-v']['black-white'].animated?.front_default} alt="" />
    )
}

export default Box
