import React from 'react'
import css from './WalletInfo.module.scss'
import BreadCrumbs from './../../BreadCrumbs/BreadCrumbs';
import metamaskStore from '../../../store/metamaskStore';
import { observer } from 'mobx-react-lite';

const WalletInfo = ({ crumb }) => {
    const youOwn = Number(metamaskStore.currentOwn)
    const wallet = metamaskStore.connectedWallet

    return (
        <>
            <section className={css.wallet} data-aos="fade-up">
                <div className="container">
                    <div className={css.walletInner} data-aos="zoom-out">
                        <BreadCrumbs crumb={crumb} />
                        <div className={css.walletInfo}>
                            <p><strong>You own:</strong> <span className="mark"><strong>{youOwn}</strong></span> Cosmoland NFTs</p>
                            <p><strong>WALLET:</strong> {wallet}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default observer(WalletInfo)