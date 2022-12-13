import { FC } from 'react'

const TagType: FC<{ name: string }> = ({ name }) => {
    return (
        <div className={`text-capitalize text-center rounded fw-bold py-1 px-2 bg-${name}`}>
            {name}
        </div>
    )
}

export default TagType
