import React from 'react'
import css from './Introduction.module.scss'

const Introduction = (props) => {
    return (
    <div className="container">
        <div className={css.mainInner}>
            <div className={css.introduction}>
                <div className={css.textBlock}>
                    <h1 className={css.title}>CosmoWay</h1>
                    <h2 className={css.subtitle}>Become a part of the modern
                    trendy future of NFT.
                    </h2>
                    <p className={css.text}>
                        The main goal of CosmoWay is to make collecting an exciting and profitable game that people of any age can take part in.
                    </p>
                    <p className={css.regularText}>
                        CosmoWay is a platform that allows anyone to earn unlimited time by collecting NFTs from CosmoFund.
                    </p>
                </div>
                <a className={css.learnMore} href="#">learn more</a>
            </div>
        </div>
    </div>
    )
}

export default Introduction