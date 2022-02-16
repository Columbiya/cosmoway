import React from 'react'
import css from './MegaPromoProgram.module.scss'

const MegaPromoProgram = (props) => {
    return (
        <div className={css.program}>
            <div className="container">
                <div className={css.inner}>
                    <div className={css.promoProgram}>
                        <h2 className={css.title}>Mega Promo Program</h2>
                        <p className={css.text + ' ' + css.weightBlack}>
                            It helps quickly expand the user base and <span className={css.mark}>increase potential bonuses</span> for platform affiliates using the accumulated budget.
                        </p>
                        <p className={css.text}>
                            The budget is formed on a particular wallet by deducting (%) from the bonuses received by affiliates (excluding the accrued collection tokens):
                        </p>
                    </div>
                    <ul className={css.list}>
                        <li className={css.listItem}><span className={css.mark}>20%</span> of the 7th and higher rank users' bonuses;</li>
                        <li className={css.listItem}><span className={css.mark}>10%</span> of the 5th and 6th rank users' bonuses;</li>
                        <li className={css.listItem}><span className={css.mark}>5%</span> of the bonuses gained by users of Ranks 3 to 4</li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default MegaPromoProgram