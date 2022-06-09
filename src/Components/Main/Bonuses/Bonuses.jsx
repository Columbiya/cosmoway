import React from 'react'
import css from './Bonuses.module.scss'
import cvrImage from '../../../assets/index-page/cvr-image.png'
import Button from '../../common/Button/Button'
import DirectAndBinary from './DirectAndBinary/DirectAndBinary'
import OtherBonuses from './OtherBonuses/OtherBonuses'

const Bonuses = (props) => {
    return (
        <>
            <div className="container">
                <h2 className={css.title}><span className="mark">direct and binary</span> bonus</h2>
            </div>
            <DirectAndBinary withText={true} />

            <div className="container">
                <h2 className={css.title}><span className="mark">rank and team</span> bonus</h2>
            </div>
            <OtherBonuses isRankAndTeam={true} />

            <div className="container">
                <h2 className={css.title}>conditions for reaching <span className="mark">rank</span></h2>
            </div>
            <OtherBonuses isConditions={true} />

            <div className="container">
                <h2 className={css.title}><span className="mark">Team</span> Bonus Example</h2>
            </div>
            <OtherBonuses isTeamsBonus={true} />

            <div className={css.earlyBonus}>
                <div className="container">
                    <h2 className={css.title}><span className="mark">Early birds</span> Example</h2>
                </div>
                <div className={css.earlyInner}>
                    <div className="container">
                        <div className={css.earlyWrapper}>
                            <div className={css.earlyContent}>
                                <p className={css.earlyText}>The first 20,000 early birds who make a purchase of at least 1 USDC will receive <br /> 
                                    <span className="mark">100 CVR tokens</span>
                                </p>
                                <p className={css.earlyText + " " + css.small}>(Main currency of the MetaCosmo metaverse)</p>
                                <Button>about cvr</Button>
                            </div>
                            <div className={css.earlyImage}>
                                <img src={cvrImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={css.fastStartBonus}>
                <div className="container">
                    <div className={css.fastBonusInner}>
                        <div className={css.fastBonusColumn}>  
                            <h2 className={css.rankTitle}><span className={css.mark}>Fast Start</span> Bonus</h2>
                            <h3 className={css.fastBonusTerms}>Terms</h3>
                            <p className={css.fastBonusText}>
                                Within 2 months from the
                                launch of the CosmoWay
                                platform, each new participant
                                can receive from $50 to
                                $100,000 by inviting <span className={css.mark}>only 4
                                partners.</span>
                            </p>
                        </div>
                        <div className={css.fastBonusColumn + ' ' + css.example}>
                            <h3 className={css.exampleNumber}>Example 1</h3>
                            <div className={css.fastBonusPeople}>
                                <div className={css.fastBonusPerson}>
                                    <img src={partnerThree} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>500 USDC</strong>
                                    </p>
                                </div>
                                <div className={css.fastBonusPerson}>
                                    <img src={partnerOne} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>500 USDC</strong>
                                    </p>
                                </div>
                                <div className={css.fastBonusPerson}>
                                    <img src={partnerFour} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>1000 USDC</strong>
                                    </p>
                                </div>
                                <div className={css.fastBonusPerson}>
                                    <img src={you} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>1,500 USDC</strong>
                                    </p>
                                </div>
                            </div>
                            <div className={css.gift}>
                                You will receive <strong>500 USDC</strong> as a gift
                            </div>
                            <p className={css.fastStartConditions}>
                                Invite <strong>four</strong> new users and receive USDC equal to the minimum Level value.
                            </p>
                        </div>
                        <div className={css.fastBonusColumn + ' ' + css.example}>
                            <h3 className={css.exampleNumber}>Example 2</h3>
                            <div className={css.fastBonusPeople}>
                                <div className={css.fastBonusPerson}>
                                    <img src={person} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>2,500 USDC</strong>
                                    </p>
                                </div>
                                <div className={css.fastBonusPerson}>
                                    <img src={partnerFive} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>2,500 USDC</strong>
                                    </p>
                                </div>
                                <div className={css.fastBonusPerson}>
                                    <img src={partnerTwo} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>2,500 USDC</strong>
                                    </p>
                                </div>
                                <div className={css.fastBonusPerson}>
                                    <img src={partnerSix} alt="" />
                                    <p className={css.fastBonusPersonText}>
                                        License activated <strong>2,500 USDC</strong>
                                    </p>
                                </div>
                            </div>
                            <div className={css.gift}>
                                You will receive <strong>2,500 USDC</strong> as a gift
                            </div>
                            <p className={css.fastStartConditions}>
                                If <strong>four</strong> new users activate licenses with an equal cost, you will receive USDC with that cost for free.
                            </p>
                        </div>
                        <img src={fastStartImage} className={css.fastBonusImage} alt="" />
                    </div>  
                </div>
            </div> */}
        </>
    )
}

export default Bonuses