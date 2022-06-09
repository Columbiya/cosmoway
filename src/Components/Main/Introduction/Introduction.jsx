import React from 'react'
import css from './Introduction.module.scss'
import Button from '../../common/Button/Button'
import headerBg from '../../../assets/index-page/bg.jpg'
import headerLeftBg from '../../../assets/index-page/header-hider.jpg'
import { observer } from 'mobx-react-lite';
import metamaskStore from '../../../store/metamaskStore'

const Introduction = (props) => {
    const connected = metamaskStore.isConnected
    const isChainMatic = metamaskStore.isChainMatic
    const connectedWallet = metamaskStore.connectedWallet

    return (
        <div className={css.mainHeader}>
            <div className={css.headerLeft}>
                <div className={css.mainHeaderContainer}>
                    <h1 className={css.headerTitle} data-aos="slide-right"><span>cosmoway</span></h1>
                    <p className={css.descr} data-aos="slide-down">Build your team and get 5 types of bonuses</p>
                    <p className={css.descr + " " + css.margin} data-aos="slide-down">Earn by selling virtual lands in the MetaCosmo metaverse</p>
                    {!connected || !isChainMatic ?
                    <>
                        <div className={css.btns}>
                            <Button data-aos="zoom-in" isFilled={true}>connect metamask</Button>
                            <span>Connect for login/register</span>
                        </div>
                        <span className={css.subtext}>You can <a href="#">download metamask here</a></span>
                    </>:
                    <>
                        <div className={css.subtext + ' ' + css.wallet}>Wallet:</div>
                        <div className={css.subtext + ' ' + css.wallet}>{connectedWallet}</div>
                    </>
                    }

                </div>
                <img src={headerLeftBg} className={css.headerLeftBg} />
            </div>
            <img src={headerBg} className={css.headerBg} />
        </div>
    )
}

export default observer(Introduction)