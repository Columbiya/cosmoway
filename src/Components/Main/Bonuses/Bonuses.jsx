import React from 'react'
import css from './Bonuses.module.scss'
import you from '../../../assets/index-page/you.png'
import partnerOne from '../../../assets/index-page/partner-1.png'
import partnerTwo from '../../../assets/index-page/partner-2.png'
import partnerThree from '../../../assets/index-page/partner-3.png'
import partnerFour from '../../../assets/index-page/partner-4.png'
import partnerFive from '../../../assets/index-page/partner-5.png'
import partnerSix from '../../../assets/index-page/partner-6.png'
import topline from '../../../assets/index-page/top-line.png'
import lineOnThirdLine from '../../../assets/index-page/line-on-third-line.png'
import directBonusImage from '../../../assets/index-page/direct-bonus.png'
import teamBonusImage from '../../../assets/index-page/team-bonus.png'
import binaryBonusImage from '../../../assets/index-page/binary-bonus.png'
import rankBonusImage from '../../../assets/index-page/rank-bonus.png'
import metamask from '../../../assets/index-page/metamask.png'
import cvrImage from '../../../assets/index-page/cvr-image.png'
import Button from '../../common/Button/Button'

const Bonuses = (props) => {
    return (
        <>
            <div className="container">
                <h2 className={css.title}><span className="mark">direct and binary</span> bonus</h2>
            </div>
            <div className={css.directAndBinaryBonus}>
                <div className="container">
                    <div className={css.innerBinary}>
                        <div className={css.tableContainer}>
                            <div className={css.table}>
                                <div className={css.tableTypes}>
                                    <h2 className={css.tableTitle}><span className={css.mark}>Direct</span> Bonus and <span className={css.mark}>Binary</span> Bonus</h2>
                                    <div className={css.typeItem + ' ' + css.bronze}>
                                        <p>Bronze / Bronze +</p>
                                    </div>
                                    <div className={css.typeItem + ' ' + css.silver}>
                                        <p>Silver / Silver +</p>
                                    </div>
                                    <div className={css.typeItem + ' ' + css.gold}>
                                        <p>Gold / Gold +</p>
                                    </div>
                                    <div className={css.typeItem + ' ' + css.platinum}>
                                        <p>Platinum / Platinum +</p>
                                    </div>
                                </div>
                                <div className={css.directBonus}>
                                    <h2 className={css.bonusTitle}>Direct Bonus</h2>
                                    <div className={css.bonusLevels}>
                                        <span className={css.level}>Lvl 1</span>
                                        <span className={css.level}>Lvl 2</span>
                                        <span className={css.level}>Lvl 3</span>
                                        <span className={css.level}>Lvl 4</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>5 %</span>
                                        <span>1 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>5 %</span>
                                        <span>2 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>6 %</span>
                                        <span>2 %</span>
                                        <span>1 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>7 %</span>
                                        <span>3 %</span>
                                        <span>1 %</span>
                                        <span>1 %</span>
                                    </div>
                                </div>
                                <div className={css.binaryBonus}>
                                    <h2 className={css.bonusTitle}>Binary Bonus</h2>
                                    <div className={css.bonusLevels + ' ' + css.noBackground}></div>
                                    <div className={css.row}>
                                        <span>5 % <span>/</span> 6 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>7 % <span>/</span> 8 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>9 % <span>/</span> 10 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>11 % <span>/</span> 12 %</span>
                                    </div>
                                </div>
                                <div className={css.paymentSystem}>
                                    <img src={metamask} alt="metamask" />
                                    <p>Payment system <strong>Metamask</strong></p>
                                </div>
                                <img src={binaryBonusImage} className={css.binaryImage} alt="" />
                                <img src={directBonusImage} className={css.tableDirectImage} alt="" />

                            </div>
                        </div>

                        <div className={css.text}>
                            <p>
                                To participate in the affiliate program, you must qualify
                                by purchasing the NFT from <span className={css.mark}>CosmoLand</span> collection.
                            </p>
                            <p>
                                To activate the affiliate program, you must have one partner on the
                                right binary leg and one partner on the left binary leg.
                            </p>
                            <p>
                                The binary bonus is given every day if the platform agent has
                                enough points on the left and right binary legs.
                            </p>
                            <p>
                                A binary pair is counted by the number of points in a weak binary leg.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className={css.title}><span className="mark">rank and team</span> bonus</h2>
            </div>
            <div className={css.rankAndTeamBonus}>
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
                            <div className={css.rankTeamTableAdditional}>
                                The Team Bonus is awarded as a percentage of the
                                Binary Bonuses received by the users registered with
                                the platform partner's referral link. The number of active
                                lines to receive the Team Bonus depends on the Rank achieved
                                by the partner and can include up to 10 active lines in depth.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className={css.title}>conditions for reaching <span className="mark">rank</span></h2>
            </div>
            <div className={css.rankAndTeamBonus + ' ' + css.conditionsSection}>
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
            <div className="container">
                <h2 className={css.title}><span className="mark">Team</span> Bonus Example</h2>
            </div>
            <div className={css.teamBonusSection + ' ' + css.rankAndTeamBonus}>
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
                                    <h4>Team Bonus of Line 1 – 400 USDC (10%) – received</h4>
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
                                        <h3 className={css.partnerText}>Binary Bonus of <span>3,000</span> USDC received</h3>
                                    </div>
                                    <div className={css.person}>
                                        <img className={css.topLine + ' ' + css.inverted + ' ' + css.lineBottom} src={lineOnThirdLine} />
                                        <img className={css.partnerImage} src={partnerSix} alt="partner 6" />
                                        <p>Partner 6</p>
                                        <h3 className={css.partnerText}>Binary Bonus of <span>3,000</span> USDC received</h3>
                                    </div>
                                </div> 
                                <div className={css.peopleTeamBonus}>
                                    <h4>Team Bonus of Line 2 – 1,100 USDC (10%) – received</h4>
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
                                <img src={cvrImage} alt="cvr image" />
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