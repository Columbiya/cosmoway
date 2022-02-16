import React from 'react'
import css from './Info.module.scss'

const Info = (props) => {
    return (
        <>
            <div className={css.container}>
                <div className="container">
                    <div className={css.inner}>
                        <div className={css.content}>
                            <p className={css.text}>
                                That is, <span className={css.mark}>network marketing in the
                                CosmoFund ecosystem</span> is marketing,
                                as in a classic product company, but 
                                since the product is digital, and the NFT 
                                and metaverse direction is a new, fashionable 
                                and rapidly developing trend, these products can 
                                be sold as fast as in HYIPs.
                            </p>
                            <p className={css.text}>
                                Therefore, the earning opportunities of network leaders 
                                may tend to the HYIPs level. At the same time, the business
                                plans of product companies are designed for dozens of years, 
                                which gives network leaders not only a stable annual growth in 
                                the structure but also satisfied partners.
                            </p>
                            <p className={css.text}>
                                The goal of <span className={css.mark}>CosmoFund</span> is to 
                                achieve an average cost of 100 ETH for NFT from collections and 
                                provide users with the opportunity to both enjoy the growth of a 
                                collectable NFT in the price and earn passively on the growing NFT 
                                trend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.quote}>
                <div className="container">
                    <div className={css.quoteContainer}>
                        <p className={css.quoteText}>
                            In 2021 sales of NFTs grew 35 times, and in the first half of the year, they amounted to more than $ 2 billion.
                        </p>
                        <p className={css.reference}>Non Fungible.com</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Info