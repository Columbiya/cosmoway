import React, { useEffect } from 'react'
import ConnectMetamask from '../Main/ConnectMetamask/ConnectMetamask'
import css from './Connect_metamask.module.scss'

const Connect_Metamask = ({ changeBackground, background }) => {
    useEffect(() => {
        changeBackground(background)
    }, [])
    
    return (
        <div className={css.wrapper}>
            <ConnectMetamask /> 
            <p className={css.text}>
                *The opportunity for claiming your gift CVR will appear after the close of the 10th stage of sales
            </p>
        </div>
    )
}

export default Connect_Metamask