import React from 'react'
import css from './Metaverse.module.scss'

const Metaverse = (props) => {
    return (
        <div className={css.container}>
            <div className="container">
                <div className={css.inner}>
                    <h2 className={css.title}><span className={css.mark}>MetaCosmo metaverse</span> and its main currency <span className={css.mark}>CVR</span></h2>
                    <p className={css.text}><span className={css.mark}>MetaCosmo is a massive decentralized metaverse</span> powered by the latest Unreal Engine 5.</p>
                    <p className={css.text}>MetaCosmo is the first metaverse in the world with a built-in referral program: <br />
                    Invite friends to join the metaverse community and you can share up to 40% of their referral commissions!</p>
                    <span className={css.mark + ' ' + css.rules}>Rules: </span>
                    <p className={css.text + ' ' + css.small}>
                    1. If the average daily balance of CVR on the wallet of the link owner is less than 200,000 CVR, then his referral percentage is 20%, and he can also choose the following cashback percentages for invited users: 0%, 5%, 10%.
                    </p>
                    <p className={css.text + ' ' + css.small}>
                    2. If the average daily CVR balance on the wallet of the link owner is 200,000 CVR or more, then the referral percentage will increase to 40%, and the link owner will be able to choose the percentage of cashback for invited users: 0%, 5%, 10%, 15% or 20%.
                    </p>
                    <p className={css.link}>You can buy CVR on <a className={css.mark} href="#">CosmoVirtual.space</a></p>
                </div>
            </div>
        </div>

    )
}

export default Metaverse