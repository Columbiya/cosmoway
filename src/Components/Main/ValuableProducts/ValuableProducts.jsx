import React from 'react'
import css from './ValuableProducts.module.scss'

const ValuableProduct = (props) => {
    return (
        <div className="container">
            <h2 className={css.title}>Valuable end products of the ecosystem</h2>
            <div className={css.inner}>
                <div className={css.content}>
                    <h3 className={css.subtitle}>Digital assets<br /> in the form of <span className={css.mark}>NFTs</span></h3>
                    <p className={css.text}><span className={css.mark}>An NFT, or a non-fungible token,</span> is a unique digital object, the originality and ownership of which is confirmed by blockchain technology.</p>
                    <p className={css.text}>An NFT is a modern digital title to an object that verifies its origin, creator and current owner, the data on when somebody purchased it, etc.</p>
                    <p className={css.text + ' ' + css.small}>The owner of NFTs from various CosmoFund collections accumulates
                        "power" tokens of these collections every day and may exchange them
                        for USDT/USDC on the cosmoswap.space website in the "Exchange" tab.
                        In this respect, one may use the NFT as a cryptocurrency mine, which
                        generates income for ten years (only without consuming electricity) and
                        is likely to be sold on the secondary OpenSea market for much more than
                        the initial price.</p>
                    <p className={css.text + ' ' + css.small}>NFTs are a growing asset (built-in price growth algorithm with increasing sales levels).</p>
                    <p className={css.text + ' ' + css.small}>NFTs from all collections are hosted on IPFS (Decentralized File Sharing Network), which is a guarantee of storage security.</p>
                </div>
            </div>
        </div>

    )
}

export default ValuableProduct