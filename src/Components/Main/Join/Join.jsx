import React from 'react'
import css from './Join.module.scss'
import telegram from '../../../assets/index-page/telegram.svg'
import twitter from '../../../assets/index-page/twitter.svg'
import discord from '../../../assets/index-page/discord.svg'

const Join = (props) => {
    return (
        <div className={css.join}>
            <div className="container">
                <div className={css.joinContainer} data-aos="fade">
                    <h2 className={css.title + " " + css.circle}><span>Join</span>the Discussion</h2>
                    <div className={css.medias}>
                        <a className={css.media + " " + css.circle} target="__blank" href="https://twitter.com/CosmoFund">
                            <img src={twitter} alt='twitter' />
                            twitter
                        </a>
                        <a className={css.media + " " + css.circle} target="__blank" href="https://discord.gg/xZE76828j5">
                            <img src={discord} alt='discord' />
                            discord
                        </a>
                        <a className={css.media + " " + css.circle} target="__blank" href="https://t.me/CosmoFundChannel">
                            <img src={telegram} alt='telegram' />
                            telegram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join