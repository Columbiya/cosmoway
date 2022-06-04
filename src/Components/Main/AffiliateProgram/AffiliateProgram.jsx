import React from 'react'
import css from './AffiliateProgram.module.scss'
import directBonusImage from '../../../assets/index-page/direct-bonus.png'
import teamBonusImage from '../../../assets/index-page/team-bonus.png'
import binaryBonusImage from '../../../assets/index-page/binary-bonus.png'
import rankBonusImage from '../../../assets/index-page/rank-bonus.png'
import fastStartImage from '../../../assets/index-page/fast-start.png'

import Snippet from '../../common/Snippet/Snippet'
import Button from '../../common/Button/Button'

const AffiliateProgram = (props) => {
    return (
        <>
            <div className={css.affiliateProgram}>
                <div className="container">
                    <div className={css.inner}>
                        <h2 className={css.title}><span className={css.mark}>Affiliate</span> Program</h2>
                        <h3 className={css.subtitle}>5 types of Bonuses</h3>

                        <div className={css.bonuses}>
                            <div className={css.bonusItem}>
                                <img src={directBonusImage} className={css.bonusImage} alt="" />
                                <h4 className={css.bonusName}>Direct Bonus</h4>
                            </div>
                            <div className={css.bonusItem}>
                                <img src={teamBonusImage} className={css.bonusImage} alt="" />
                                <h4 className={css.bonusName}>Team Bonus</h4>
                            </div>
                            <div className={css.bonusItem}>
                                <img src={binaryBonusImage} className={css.bonusImage} alt="" />
                                <h4 className={css.bonusName}>Binary Bonus</h4>
                            </div>
                            <div className={css.bonusItem}>
                                <img src={rankBonusImage} className={css.bonusImage} alt="" />
                                <h4 className={css.bonusName}>Rank Bonus</h4>
                            </div>
                            <div className={css.bonusItem}>
                                <img src={fastStartImage} className={css.bonusImage} alt="" />
                                <h4 className={css.bonusName}>Fast Start Bonus</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.snippetContainer}>
                <Snippet title={'Only one thing is required to qualify'}
                        secondColText={'NFTs from the CosmoLand collections'}
                        thirdColText={<Button isColorBlack={true}>about cosmoland</Button>} />
            </div>
            <div className={css.features}>
                <div className="container">
                    <div className={css.featuresInner}>
                        <div className={css.feature}>
                            <p>
                                Minimum purchase amount from 1 USDC
                            </p>
                        </div>
                        <div className={css.feature}>
                            <p>
                                Request withdrawal of reward at any time
                            </p>
                        </div>
                        <div className={css.feature}>
                            <p>
                                Weekly rewards
                            </p>
                        </div>
                        <div className={css.feature}>
                            <p>
                                5 bonus programs
                            </p>
                        </div>
                        <div className={css.feature}>
                            <p>
                                Receving binary rewards from the entire depth of the referral structure
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </>

    )
}

export default AffiliateProgram