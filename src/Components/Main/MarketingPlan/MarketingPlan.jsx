import React from 'react'
import css from './MarketingPlan.module.scss'
import bronzeIcon from '../../../assets/bronze-icon.png'
import silverIcon from '../../../assets/silver-icon.png'
import goldenIcon from '../../../assets/gold-icon.png'
import platinumIcon from '../../../assets/platinum-icon.png'
import spring1 from '../../../assets/index-page/spring-plan-1.png'
import spring2 from '../../../assets/index-page/spring-plan-2.png'

const MarketingPlan = (props) => {
    return (
        <div className={css.marketingPlanContainer}>
            <div className="container">
                <div className={css.marketingPlan}>
                    <h2 className={css.title}><span className='mark'>Marketing</span> Plan</h2>
                    <h3 className={css.subtitle}>when Collecting NFTs</h3>
                    <div className={css.plans}>
                        <div className={css.planItem + ' ' + css.bronze}>
                            <img src={bronzeIcon} className={css.icon} alt="" />
                            <h3 className={css.planName}>Bronze Level</h3>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade}>Bronze</span>
                                <p className={css.text}>50 NFTs</p>
                            </div>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade + ' ' + css.plus}>Bronze +</span>
                                <p className={css.text}>250 NFTs</p>
                            </div>
                        </div>

                        <div className={css.planItem + ' ' + css.silver}>
                            <img src={silverIcon} className={css.icon} alt="" />
                            <h3 className={css.planName}>Silver Level</h3>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade}>Silver</span>
                                <p className={css.text}>500 NFTs</p>
                            </div>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade + ' ' + css.plus}>Silver +</span>
                                <p className={css.text}>2,500 NFTs</p>
                            </div>
                        </div>

                        <div className={css.planItem + ' ' + css.golden}>
                            <img src={goldenIcon} className={css.icon} alt="" />
                            <h3 className={css.planName}>Golden Level</h3>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade}>Golden</span>
                                <p className={css.text}>5,000 NFTs</p>
                            </div>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade + ' ' + css.plus}>Golden +</span>
                                <p className={css.text}>10,000 NFTs</p>
                            </div>
                        </div>

                        <div className={css.planItem + ' ' + css.platinum}>
                            <img src={platinumIcon} className={css.icon} alt="" />
                            <h3 className={css.planName}>Platinum Level</h3>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade}>Platinum</span>
                                <p className={css.text}>50,000 NFTs</p>
                            </div>
                            <div className={css.scheme}>
                                <span className={css.schemeGrade + ' ' + css.plus}>Platinum +</span>
                                <p className={css.text}>100,000 NFTs</p>
                            </div>
                        </div>
                    </div>
                    <img src={spring1} className={css.spring} alt="" />
                    <img src={spring2} className={css.springTwo} alt="" />
                </div>
            </div>
        </div>


    )
}

export default MarketingPlan