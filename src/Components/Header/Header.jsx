import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './Header.module.scss'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { DASHBOARD_PATH, REFERAL_TREE_PATH, WALLET_PATH } from '../../consts'
import { scrollTop } from '../../scrollTop'

const Header = (props) => {
    let [open, setOpen] = useState(false)
    const openClasses = open ? `${css.open}`: null
    const linksClasses = open ? `${css.open}`: null
    const navigate = useNavigate()

    const onNavClick = (path) => {
        scrollTop(() => navigate(path))
        setOpen(false)
    }

    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.headerInner}>
                    <div className={css.logo}>
                        <a className={css.imgLink}><img src={logo} alt="logo" onClick={() => onNavClick('/')} /></a>
                    </div>
                    <img src={menu} className={css.menu + ' ' + openClasses} onClick={() => setOpen(!open)} alt="menu" />
                    <div className={css.headerLinks + ' ' + linksClasses}>
                        <a className={css.headerLink} onClick={() => onNavClick(DASHBOARD_PATH)}>Dashboard</a>
                        <a className={css.headerLink} onClick={() => onNavClick(REFERAL_TREE_PATH)}>Referal Tree</a>
                        <a className={css.headerLink} onClick={() => onNavClick(WALLET_PATH)}>Wallet</a>
                        <a className={css.headerLink} onClick={() => onNavClick(DASHBOARD_PATH)}>Buy Cosmoland</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header