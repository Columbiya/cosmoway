import React from 'react'
import css from './Footer.module.scss'


const Footer = (props) => {
    return (
        <footer className={css.footer}>
            <div className="container">
                <div className={css.socialMedia}>
                    <a className={css.socialMediaLink} href="#" target="__blank">
                        Twitter
                    </a>
                    <a className={css.socialMediaLink} href="#" target="__blank">
                        Discord
                    </a>
                    <a className={css.socialMediaLink} href="#" target="__blank">
                        Telegram channel
                    </a>
                    <a className={css.socialMediaLink} href="#" target="__blank">
                        Telegram chat
                    </a>
                    <a className={css.socialMediaLink} href="#" target="__blank">
                        Medium
                    </a>
                    <a className={css.socialMediaLink} href="#" target="__blank">
                        Taplink
                    </a>
                </div>
                <div className={css.footerInfo}>
                    <p className={css.date}>CosmoWay © 2022</p>
                    <div className={css.email}>
                        <p>
                            You can send us an email:
                        </p>
                        <a href="#" className={css.emailLink}>support@cosmofund.space</a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer