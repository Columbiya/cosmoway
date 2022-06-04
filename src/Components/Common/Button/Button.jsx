import React, { useState } from 'react'
import css from './Button.module.scss'

const Button = ({ children, isFilled, isColorBlack, soon, animatedGradient, href, boxShadowOnHover, text, ...props}) => {
    const [isOver, setOver] = useState(false)

    const classes = isFilled ? css.filled: css.hollow
    const colorClass = isColorBlack ? css.black: null
    const animated = animatedGradient ? css.animated: null
    const boxShadowHover = boxShadowOnHover ? css.boxShadowHover: null

    const content = isOver ? 'soon': children || text

    return (
        <>
            {!href ? 
                <button className={css.button + " " + classes + " " + colorClass + " " + animated + " " + boxShadowHover} 
                        onMouseEnter={soon ? () => setOver(true): null}
                        onMouseLeave={soon ? () => setOver(false): null}
                    {...props}>
                    {content}
                </button> :
                <a href={href}
                   className={css.button + " " + classes + " " + colorClass + " " + animated + " " + boxShadowHover}
                   target="__blank"
                   onMouseEnter={soon ? () => setOver(true): null}
                   onMouseLeave={soon ? () => setOver(false): null}
                   {...props}>
                       {content}
                </a>
        }

        </>

    )
}

export default Button