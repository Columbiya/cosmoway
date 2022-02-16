import React from 'react'
import { Link } from 'react-router-dom'
import css from './Header.module.scss'
import logo from '../../assets/logo.png'

const Header = (props) => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.headerInner}>
                    <div className={css.logo}>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className={css.headerLinks}>
                        <Link className={css.headerLink} to='/dashboard'>Dashboard</Link>
                        <Link className={css.headerLink} to='/referal-tree'>Referal Tree</Link>
                        <Link className={css.headerLink} to='/wallet'>Wallet</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header