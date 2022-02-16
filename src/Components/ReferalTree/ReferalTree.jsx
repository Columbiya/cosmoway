import React from 'react'
import Button from '../Common/Button/Button'
import css from './ReferalTree.module.scss'
import linkIcon from '../../assets/referral-tree/link-icon.png'

const ReferalTree = (props) => {
    return (
        <section className={css.referal}>
            <div className="container">
                <div className={css.buttons}>
                    <div className={css.buttonsLeft}>
                        <div className={css.dropDown}>
                            Left Team
                            <div className={css.dropDownContent}>
                                <p>
                                    Right Team
                                </p>
                            </div>
                        </div>
                        <Button text={'copy referral link'} isHollow={false} image={linkIcon} style={{width: '360px', padding: '20px'}} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReferalTree