import React from 'react'
import css from './Button.module.scss'

const Button = ({text, isHollow, image, ...props}) => {
    const classes = isHollow ? `${css.button} ${css.hollow}`: `${css.button} ${css.wholeButton}`
    return (
        <button className={classes} {...props}>{text} {image && <img src={image} alt="" />}</button>
    )
}

export default Button