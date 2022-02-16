import React from 'react'
import css from './ConnectMetamask.module.scss'

const ConnectMetamask = (props) => {
    return (
        <div className="container">
            <div className={css.inner}>
                <h3 className={css.title}>Connect your MetaMask wallet and get <span>100 CVR</span> for free! </h3>
                <h4 className={css.subtitle}><span>1000 CVR</span> left</h4>
                <button className={css.connect}>Connect Metamask</button>
                <p className={css.text}>You can <a className={css.link} href="#">download Metamask here</a></p>
            </div>
        </div>
    )
}

export default ConnectMetamask