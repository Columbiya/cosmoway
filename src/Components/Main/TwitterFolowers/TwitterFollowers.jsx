import React from 'react'
import css from './TwitterFollowers.module.scss'

const TwitterFollowers = (props) => {
    return (
        <div className="container">
            <div className={css.runningLine}> 
                <h3 className={css.title}>Здесь должна быстро БЕГУЩАЯ СТРОКА</h3>
            </div> 
        </div>
    )
}

export default TwitterFollowers