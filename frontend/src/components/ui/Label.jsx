import React from 'react'

const Label = ({label, className}) => {
    return (
        <label className={className}>
            {label} *
        </label>
    )
}

export default Label
