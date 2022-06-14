import React, { useState } from 'react'
import css from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { scrollTop } from '../../scrollTop'
import Button from './../common/Button/Button';
import { ABOUT_COSMOLANDS_PATH, DASHBOARD_PATH, REFERAL_TREE_PATH } from '../../consts'
import metamaskStore from '../../store/metamaskStore'
import { observer } from 'mobx-react-lite';
import { WALLET_PATH, BUY_COSMOLAND_PATH } from './../../consts';

const Header = (props) => {
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState(false)
    const openClasses = isOpen ? css.open: null
    const isConnected = metamaskStore.isConnected
    const chainMatic = metamaskStore.isChainMatic

    const openMenu = () => {
        setOpen(open => !open)
    }

    return (
        <header className={css.header}>
            <div className={`container ${css.fullHeight}`}>
                <div className={css.headerContainer}>
                    <div className={css.logo}>
                        <img src={logo} onClick={() => scrollTop(() => navigate('/'))} className={css.logoImage} />
                    </div>
                    <nav className={css.nav}>
                        {isConnected && chainMatic ? 
                        <>
                        <div className={css.navInner + " " + openClasses}>
                            <div className={css.navLink}>
                                <span className={css.groupName} onClick={() => scrollTop(() => navigate(DASHBOARD_PATH))}>Dashboard</span>
                            </div>
                            <div className={css.navLink}>
                                <span className={css.groupName}>CosmoLand NFT</span>
                                <ul className={css.dropdown}>
                                    <li>
                                        <span className={css.listText}>
                                            <strong onClick={() => scrollTop(() => navigate(ABOUT_COSMOLANDS_PATH))}>
                                                About CosmoLands
                                            </strong>
                                        </span>
                                    </li>
                                    <li>
                                        <span className={css.listText}>
                                            <strong onClick={() => scrollTop(() => navigate(BUY_COSMOLAND_PATH))}>
                                                Buy CosmoLand
                                            </strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className={css.navLink}>
                                <span className={css.groupName} onClick={() => scrollTop(() => navigate(REFERAL_TREE_PATH))}>Referral Tree</span>
                            </div>
                            <div className={css.navLink} onClick={() => scrollTop(() => navigate(WALLET_PATH))}>
                                <span className={css.groupName}>Wallet</span>
                            </div>
                        </div>

                            <div className={css.navLink + " " + css.navbarMobile} onClick={openMenu}>
                                <div></div>
                            </div>
                        </>:
                        <>
                            {!isConnected || !chainMatic ? 
                                <Button data-aos="zoom-in" isFilled={true} 
                                        onClick={!isConnected ? () => metamaskStore.connect_to_metamask():
                                                                              () => metamaskStore.switchChain()}>
                                    {!isConnected ? 'Connect metamask': 'Switch chain'}
                                </Button>
                                :
                                <Button data-aos="zoom-in" isFilled={true}
                                        onClick={() => metamaskStore.switchChain()}>Switch chain</Button>
                            }
                        </>
                        }
                    </nav>
                </div>
            </div>
        </header>   
    )
}

export default observer(Header)