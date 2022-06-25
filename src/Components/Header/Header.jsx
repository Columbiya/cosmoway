import React, { useState } from 'react'
import css from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { scrollTop } from '../../scrollTop'
import Button from './../common/Button/Button';
import { ABOUT_COSMOLANDS_PATH, DASHBOARD_PATH, REFERAL_TREE_PATH, BUY_COSMOLAND_PATH, WALLET_PATH } from '../../consts'
import metamaskStore from '../../store/metamaskStore'
import { observer } from 'mobx-react-lite';

const Header = (props) => {
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState(false)
    const openClasses = isOpen ? css.open: null
    const isConnected = metamaskStore.isConnected
    const chainMatic = metamaskStore.isChainMatic

    const openMenu = () => {
        setOpen(open => !open)
    }

    const scrollNavigate = (path) => {
        setOpen(false)
        scrollTop(() => navigate(path))
    }

    const closeNavbar = (e) => {
        if (!e.target.classList.contains(css.navInner)) return

        setOpen(false)
    }

    return (
        <header className={css.header}>
            <div className={`container ${css.fullHeight}`}>
                <div className={css.headerContainer}>
                    <div className={css.logo}>
                        <img src={logo} onClick={() => scrollNavigate('/')} className={css.logoImage} />
                    </div>
                    <nav className={css.nav} onClick={closeNavbar}>
                        {isConnected && chainMatic ? 
                        <>
                        <div className={css.navInner + " " + openClasses}>
                            <div className={css.navLink}>
                                <span className={css.groupName} onClick={() => scrollNavigate(DASHBOARD_PATH)}>Dashboard</span>
                            </div>
                            <div className={css.navLink}>
                                <span className={css.groupName}>CosmoLand NFT</span>
                                <ul className={css.dropdown}>
                                    <li>
                                        <span className={css.listText}>
                                            <strong onClick={() => scrollNavigate(ABOUT_COSMOLANDS_PATH)}>
                                                About CosmoLands
                                            </strong>
                                        </span>
                                    </li>
                                    <li>
                                        <span className={css.listText}>
                                            <strong onClick={() => scrollNavigate(BUY_COSMOLAND_PATH)}>
                                                Buy CosmoLand
                                            </strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className={css.navLink}>
                                <span className={css.groupName} onClick={() => scrollNavigate(REFERAL_TREE_PATH)}>Referral Tree</span>
                            </div>
                            <div className={css.navLink} onClick={() => scrollNavigate(WALLET_PATH)}>
                                <span className={css.groupName}>Wallet</span>
                            </div>
                        </div>

                            <div className={css.navLink + " " + css.navbarMobile + " " + openClasses} onClick={openMenu}>
                                <div></div>
                            </div>
                        </>:
                        <>
                            {!isConnected || !chainMatic ? 
                                <Button data-aos="zoom-in" isFilled={true}
                                        style={{alignSelf: 'center'}} 
                                        onClick={!isConnected ? () => metamaskStore.connect_to_metamask():
                                                                              () => metamaskStore.switchChain()}>
                                    {!isConnected ? 'Connect metamask': 'Switch chain'}
                                </Button>
                                :
                                <Button data-aos="zoom-in" isFilled={true}
                                        style={{alignSelf: 'center'}}
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