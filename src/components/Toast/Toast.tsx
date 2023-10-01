import { FC } from 'react'
import './toast.scss'

export interface ToastProps {
  pokemon_name: string;
}

const Toast: FC<ToastProps> = ({ pokemon_name }) => {
  return (
    <div className='d-flex gap-2 align-items-center poketoast'>
      <img className='' height={50} width={50} src="/PC_sprite.webp" alt="PC sprite" />
      <p className='fw-semibold flex-grow-1 fs-6'>Se ha añadido a <span className='fw-bold'>{pokemon_name}</span> a tu PC</p>
      <button className='btn btn-black'>
        Deshacer
      </button>
    </div>
  )
}

export default Toast
