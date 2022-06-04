import React from 'react'
import css from './Introduction.module.scss'
import LazyLoadImage from '../../common/LazyLoadImage/LazyLoadImage'
import Preloader from '../../Preloader/Preloader'
import Button from '../../common/Button/Button'
import headerBg from '../../../assets/index-page/bg.jpg'
import headerLeftBg from '../../../assets/index-page/header-hider.jpg'

const Introduction = (props) => {
    return (
        <div className={css.mainHeader}>
            <div className={css.headerLeft}>
                <div className={css.mainHeaderContainer}>
                    <h1 className={css.headerTitle} data-aos="slide-right"><span>cosmoway</span></h1>
                    <p className={css.descr} data-aos="slide-down">Build your team and get 5 types of bonuses</p>
                    <p className={css.descr + " " + css.margin} data-aos="slide-down">Earn by selling virtual lands in the MetaCosmo metaverse</p>
                    <div className={css.btns}>
                        <Button data-aos="zoom-in" isFilled={true}>connect metamask</Button>
                        <span>You can <a href="#">download metamask here</a></span>
                    </div>
                </div>
                <img src={headerLeftBg} className={css.headerLeftBg} />
            </div>
            <img src={headerBg} className={css.headerBg} />
        </div>
    )
}

export default Introduction