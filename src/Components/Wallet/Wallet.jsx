import React, { useEffect } from 'react'
import Button from '../Common/Button/Button'
import css from './Wallet.module.scss'

const Wallet = ({ changeBackground, background }) => {
    useEffect(() => {
        changeBackground(background)
    }, []);

    return (
        <>
            <section className={css.wallet}>
                <div className="container">
                    <div className={css.warning}>
                        <div className={css.warningIcon}>
                            i
                        </div>
                        <p className={css.warningText}>
                            Accruals occur once a week (from Tuesday to Wednesday at 24:00 UTC),
                            after which you can claim your reward at any time
                        </p>
                    </div>
                </div>
            </section>
            <section className={css.statistics}>
                <div className="container">
                    <div className={css.rewardPromotion}>
                        <div className={css.reward}>
                            <h3 className={css.rewardTitle}>My reward (USDC)</h3>
                            <div className={css.rewardInfo}>
                                <span>1,000,000.00</span>
                                <Button text={'claim'} isHollow={false} />
                            </div>
                        </div>
                        <div className={css.reward}>
                            <h3 className={css.rewardTitle + ' ' + css.upperCase}>Available for promotion</h3>
                            <div className={css.rewardInfo + ' ' + css.promotion}>
                                <span>30,000 USDC</span>
                                <Button text={'learn more'} isHollow={false} />
                            </div>
                        </div>
                    </div>
                    <div className={css.rewards}>
                        <div className={css.allTimeReward}>
                            <h3 className={css.rewardTitle}>All time reward (USDC)</h3>
                            <div className={css.allTimeRewardInfo}>
                                <div className={css.rewardAmount}>
                                    40,000
                                </div>
                                <div className={css.bonuses}>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Direct Bonus</span>
                                        <span className={css.mark}>5,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Binary Bonus</span>
                                        <span className={css.mark}>20,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Rank Bonus</span>
                                        <span className={css.mark}>5,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Team Bonus</span>
                                        <span className={css.mark}>5,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Fast Start Bonus</span>
                                        <span className={css.mark}>5,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.allTimeReward}>
                            <h3 className={css.rewardTitle}>All time reward (USDC)</h3>
                            <div className={css.allTimeRewardInfo}>
                                <div className={css.rewardAmount}>
                                    60,000
                                </div>
                                <div className={css.bonuses}>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Direct Bonus</span>
                                        <span className={css.mark}>10,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Binary Bonus</span>
                                        <span className={css.mark}>20,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Rank Bonus</span>
                                        <span className={css.mark}>10,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Team Bonus</span>
                                        <span className={css.mark}>10,000</span>
                                    </div>
                                    <div className={css.bonus}>
                                        <span className={css.bonusName}>Fast Start Bonus</span>
                                        <span className={css.mark}>10,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.claimReward}>
                        <h3 className={css.rewardTitle + ' ' + css.upperCase}>claim $100 (CVR) bonus</h3>
                        <div className={css.claimText}>
                            <div className={css.warningIcon}>
                                i
                            </div>
                            <div className={css.text}>
                                <p>
                                    You will be able to claim the bonus after the close of the 10th stage of the CVR token sale
                                </p>
                                <div className={css.buttons}>
                                    <Button text={'claim'} isHollow={false} style={{marginRight: '30px'}} />
                                    <Button text={'learn more'} isHollow={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wallet