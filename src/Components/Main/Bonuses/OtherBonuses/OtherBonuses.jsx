import React from 'react'
import css from '../Bonuses.module.scss'
import you from '../../../../assets/index-page/you.png'
import partnerOne from '../../../../assets/index-page/partner-1.png'
import partnerTwo from '../../../../assets/index-page/partner-2.png'
import partnerThree from '../../../../assets/index-page/partner-3.png'
import partnerFour from '../../../../assets/index-page/partner-4.png'
import partnerFive from '../../../../assets/index-page/partner-5.png'
import partnerSix from '../../../../assets/index-page/partner-6.png'
import topline from '../../../../assets/index-page/top-line.png'
import lineOnThirdLine from '../../../../assets/index-page/line-on-third-line.png'
import teamBonusImage from '../../../../assets/index-page/team-bonus.png'
import rankBonusImage from '../../../../assets/index-page/rank-bonus.png'

const OtherBonuses = ({ isRankAndTeam, isConditions, isTeamsBonus, isPopup }) => {
    const popupClasses = isPopup ? css.popup : null

    return (
        <>
            {isRankAndTeam &&
                <>
                    {isPopup && <h2 className={css.popupTitle + ' ' + css.conditionsTitle}>Needed for the next rank <span>Rewards for reaching the Rank</span></h2>}
                    <div className={css.rankAndTeamBonus + ' ' + css.rank + ' ' + popupClasses}>
                        <div className="container">
                            <div className={css.rankAndTeamTable}>
                                <div className={css.tableContent}>
                                    <div className={css.tableRank}>
                                        <h3 className={css.columnTitle}>Rank</h3>
                                        <span>Rank 1</span>
                                        <span>Rank 2</span>
                                        <span>Rank 3</span>
                                        <span>Rank 4</span>
                                        <span>Rank 5</span>
                                        <span>Rank 6</span>
                                        <span>Rank 7</span>
                                        <span>Rank 8</span>
                                        <span>Rank 9</span>
                                        <span>Rank 10</span>
                                    </div>
                                    <div className={css.tableRank + ' ' + css.bonus}>
                                        <h3 className={css.columnTitle}>Rank Bonus, USDC</h3>
                                        <span>50</span>
                                        <span>100</span>
                                        <span>250</span>
                                        <span>1,000</span>
                                        <span>2,500</span>
                                        <span>4,000</span>
                                        <span>6,000</span>
                                        <span>15,000</span>
                                        <span>30,000</span>
                                        <span>50,000</span>
                                    </div>
                                    <div className={css.tableRank + ' ' + css.teamBonus}>
                                        <h3 className={css.columnTitle}>Team Bonus</h3>
                                        <div className={css.lines}>
                                            <span>Line 1</span>
                                            <span>Line 2</span>
                                            <span>Line 3</span>
                                            <span>Line 4</span>
                                            <span>Line 5</span>
                                            <span>Line 6</span>
                                            <span>Line 7</span>
                                            <span>Line 8</span>
                                            <span>Line 9</span>
                                            <span>Line 10</span>
                                        </div>
                                        <div className={css.teamBonusContent}>
                                            <div className={css.teamBonusRow}>
                                                <span>10%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>10%</span>
                                                <span>10%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>10%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>15%</span>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                                <span>3%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>15%</span>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>5%</span>
                                                <span>3%</span>
                                                <span>3%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>15%</span>
                                                <span>15%</span>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>3%</span>
                                                <span>3%</span>
                                                <span>2%</span>
                                            </div>
                                            <div className={css.teamBonusRow}>
                                                <span>20%</span>
                                                <span>15%</span>
                                                <span>15%</span>
                                                <span>10%</span>
                                                <span>10%</span>
                                                <span>5%</span>
                                                <span>3%</span>
                                                <span>3%</span>
                                                <span>2%</span>
                                                <span>2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={rankBonusImage} className={css.rankBonusImage} alt='' />
                                    <img src={teamBonusImage} alt='' className={css.teamBonusImage} />
                                    {!isPopup &&
                                        <div className={css.rankTeamTableAdditional}>
                                            The Team Bonus is awarded as a percentage of the
                                            Binary Bonuses received by the users registered with
                                            the platform partner's referral link. The number of active
                                            lines to receive the Team Bonus depends on the Rank achieved
                                            by the partner and can include up to 10 active lines in depth.
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            }

            {isConditions &&
                <>
                    {isPopup && <h2 className={css.popupTitle + ' ' + css.conditionsTitle}><span>Needed for the next rank</span> Rewards for reaching the Rank</h2>}
                    <div className={css.rankAndTeamBonus + ' ' + css.conditionsSection + ' ' + popupClasses}>
                        <div className="container">
                            <div className={css.rankAndTeamBonusInner}>
                                <div className={css.tableContainer}>
                                    <div className={css.rankAndTeamTable + ' ' + css.conditions}>
                                        <div className={css.tableContent}>
                                            <div className={css.tableRank}>
                                                <h3 className={css.columnTitle}>Rank</h3>
                                                <span>Rank 1</span>
                                                <span>Rank 2</span>
                                                <span>Rank 3</span>
                                                <span>Rank 4</span>
                                                <span>Rank 5</span>
                                                <span>Rank 6</span>
                                                <span>Rank 7</span>
                                                <span>Rank 8</span>
                                                <span>Rank 9</span>
                                                <span>Rank 10</span>
                                            </div>
                                            <div className={css.tableRank + ' ' + css.bonus}>
                                                <h3 className={css.columnTitle}>Line 1<br />The amount of USDC</h3>
                                                <span>1,000</span>
                                                <span>2,500</span>
                                                <span>5,000</span>
                                                <span>10,000</span>
                                                <span>25,000</span>
                                                <span>50,000</span>
                                                <span>100,000</span>
                                                <span>200,000</span>
                                                <span>250,000</span>
                                                <span>300,000</span>
                                            </div>
                                            <div className={css.tableRank + ' ' + css.bonus}>
                                                <h3 className={css.columnTitle}>Leg 1<br />The amount of USDC</h3>
                                                <span>2,500</span>
                                                <span>5,000</span>
                                                <span>25,000</span>
                                                <span>50,000</span>
                                                <span>100,000</span>
                                                <span>250,000</span>
                                                <span>500,000</span>
                                                <span>1,000,000</span>
                                                <span>3,000,000</span>
                                                <span>5,000,000</span>
                                            </div>
                                            <div className={css.tableRank + ' ' + css.bonus}>
                                                <h3 className={css.columnTitle}>Leg 2<br />The amount of USDC</h3>
                                                <span>750</span>
                                                <span>1,500</span>
                                                <span>7,500</span>
                                                <span>15,000</span>
                                                <span>30,000</span>
                                                <span>75,000</span>
                                                <span>150,000</span>
                                                <span>300,000</span>
                                                <span>900,000</span>
                                                <span>1,500,000</span>
                                            </div>
                                        </div>
                                        <img src={rankBonusImage} alt="" className={css.conditionsRankImage} />
                                    </div>
                                </div>

                                <div className={css.text + " " + css.center}>
                                    <p>
                                        To reach new ranks, you should maintain the proportion for the binary legs.
                                    </p>
                                    <p>
                                        The binary proportion is based on the amount of USDC from the activation
                                        of levels by users (excluding your sponsor’s amount of USDC) who registered
                                        with the help of your referral link.
                                    </p>
                                    <p>
                                        The highest binary leg's amount of USDC can be on both the left and right legs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            }

            {isTeamsBonus &&
            <>
                <div className={css.teamBonusSection + ' ' + css.rankAndTeamBonus + ' ' + popupClasses}>
                    <div className="container">
                        <div className={css.teamBonusInner + ' ' + css.tableContainer}>
                            <div className={css.teamBonusExample}>
                                <div className={css.exampleUpper + ' ' + css.exampleLine}>
                                    <div className={css.person}>
                                        <img className={css.partnerImage} src={you} alt="you" />
                                        <h3 className={css.exampleYou}>Your <strong>Rank 2</strong></h3>
                                    </div>
                                </div>
                                <div className={css.exampleLine}>
                                    <div className={css.lineNumber}>
                                        <p>
                                            1<span>st</span> line
                                        </p>
                                    </div>
                                    <div className={css.people}>
                                        <div className={css.person}>
                                            <img className={css.topLine} src={topline} />
                                            <img className={css.partnerImage} src={partnerOne} alt="partner 1" />
                                            <p>Partner 1</p>
                                            <h3 className={css.partnerText}>Binary Bonus of <span>1,000</span> USDC received</h3>
                                        </div>
                                    </div>
                                    <div className={css.people}>
                                        <div className={css.person}>
                                            <img className={css.topLine + ' ' + css.inverted} src={topline} />
                                            <img className={css.partnerImage} src={partnerTwo} alt="partner 2" />
                                            <p>Partner 2</p>
                                            <h3 className={css.partnerText}>Binary Bonus of <span>3,000</span> USDC received</h3>
                                        </div>
                                    </div>
                                    <div className={css.peopleTeamBonus}>
                                        <h4>Team Bonus of Line 1 + 400 USDC (10%) – received</h4>
                                    </div>
                                    <div className={css.lineAllHeight + ' ' + css.lineSmall}></div>
                                </div>
                                <div className={css.exampleLine}>
                                    <div className={css.lineNumber}>
                                        <p>
                                            2<span>nd</span> line
                                        </p>
                                    </div>
                                    <div className={css.people}>
                                        <div className={css.person}>
                                            <img className={css.topLine} src={lineOnThirdLine} />
                                            <img className={css.partnerImage} src={partnerThree} alt="partner 3" />
                                            <p>Partner 3</p>
                                            <h3 className={css.partnerText}>Binary Bonus of <span>1,000</span> USDC received</h3>
                                        </div>
                                        <div className={css.person}>
                                            <img className={css.topLine + ' ' + css.inverted + ' ' + css.lineBottom} src={lineOnThirdLine} />
                                            <img className={css.partnerImage} src={partnerFour} alt="partner 4" />
                                            <p>Partner 4</p>
                                            <h3 className={css.partnerText}>Binary Bonus of <span>3,000</span> USDC received</h3>
                                        </div>
                                    </div>
                                    <div className={css.people}>
                                        <div className={css.person}>
                                            <img className={css.topLine} src={lineOnThirdLine} />
                                            <img className={css.partnerImage} src={partnerFive} alt="partner 5" />
                                            <p>Partner 5</p>
                                            <h3 className={css.partnerText}>Binary Bonus of <span>4,000</span> USDC received</h3>
                                        </div>
                                        <div className={css.person}>
                                            <img className={css.topLine + ' ' + css.inverted + ' ' + css.lineBottom} src={lineOnThirdLine} />
                                            <img className={css.partnerImage} src={partnerSix} alt="partner 6" />
                                            <p>Partner 6</p>
                                            <h3 className={css.partnerText}>Binary Bonus of <span>3,000</span> USDC received</h3>
                                        </div>
                                    </div>
                                    <div className={css.peopleTeamBonus}>
                                        <h4>Team Bonus of Line 2 + 1,100 USDC (10%) – received</h4>
                                    </div>
                                    <div className={css.lineAllHeight}></div>
                                </div>
                            </div>
                            <div className={css.resultUsdc}>
                                Result<br /> + <span>1,500</span> USDC
                            </div>
                            <img src={teamBonusImage} className={css.teamImage} alt="" />
                        </div>
                    </div>
                </div>
            </>

            }
        </>
    )
}

export default OtherBonuses