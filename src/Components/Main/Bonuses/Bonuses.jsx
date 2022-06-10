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
                <h2 className={css.title} data-aos="fade-up"><span className="mark">direct and binary</span> bonus</h2>
            </div>
            <DirectAndBinary withText={true} />

            <div className="container">
                <h2 className={css.title} data-aos="fade-up"><span className="mark">rank and team</span> bonus</h2>
            </div>
            <OtherBonuses isRankAndTeam={true} />

            <div className="container">
                <h2 className={css.title} data-aos="fade-up">conditions for reaching <span className="mark">rank</span></h2>
            </div>
            <OtherBonuses isConditions={true} />

            <div className="container">
                <h2 className={css.title} data-aos="fade-up"><span className="mark">Team</span> Bonus Example</h2>
            </div>
            <OtherBonuses isTeamsBonus={true} />

            <div className={css.earlyBonus}>
                <div className="container">
                    <h2 className={css.title} data-aos="fade-up"><span className="mark">Early birds</span> Example</h2>
                </div>
                <div className={css.earlyInner} data-aos="fade-up">
                    <div className="container">
                        <div className={css.earlyWrapper}>
                            <div className={css.earlyContent}>
                                <p className={css.earlyText} data-aos="fade-up">The first 20,000 early birds who make a purchase of at least 1 USDC will receive <br /> 
                                    <span className="mark">100 CVR tokens</span>
                                </p>
                                <p className={css.earlyText + " " + css.small} data-aos="fade-up">(Main currency of the MetaCosmo metaverse)</p>
                                <Button href="https://metacosmo.space/about-cvr" data-aos="fade-up">about cvr</Button>
                            </div>
                            <div className={css.earlyImage}>
                                <img src={cvrImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bonuses