import React, { useEffect, useState } from 'react'
import css from './Dashboard.module.scss'
import goldIcon from '../../assets/gold-icon.png'
import Footer from '../Footer/Footer'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import News from '../Main/News/News'
import Feedback from '../Main/Feedback/Feedback'
import cvrBirds from '../../assets/dashboard/early-birds-image.png'
import cvrBirdsMobile from '../../assets/dashboard/early-birds-image-mobile.png'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'
import Popup from '../common/Popups/Popup'
import DirectAndBinary from '../Main/Bonuses/DirectAndBinary/DirectAndBinary'
import OtherBonuses from '../Main/Bonuses/OtherBonuses/OtherBonuses'
import WalletInfo from '../common/WalletInfo/WalletInfo'
import { scrollTop } from './../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { WALLET_PATH } from './../../consts';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true)
    const [directBonusOpen, setDirectBonusOpen] = useState(false)
    const [neededForNextRank, setNeededForNextRank] = useState(false)
    const [rewardsForRank, setRewardsForRank] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        async function getNews() {
            await newsStore.getNews()
            setLoading(false)
        }

        getNews()
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    const openDirectBonus = () => {
        setDirectBonusOpen(true)
    }

    const openNeededForNextRank = () => {
        setNeededForNextRank(true)
    }

    const openWarning = () => {
        setError(`Accruals occur once a week (from Tuesday to Wednesday at 24:00 UTC), after
                which you can claim your reward at any time`)
    }

    return (
        <>
            <div>
                {directBonusOpen && <Popup bonus={DirectAndBinary} onHide={() => setDirectBonusOpen(false)} /> }
                {neededForNextRank && <Popup isNextRank={true} bonus={() => <OtherBonuses isConditions={true} isPopup={true} />} onHide={() => setNeededForNextRank(false)} /> }
                {rewardsForRank && <Popup bonus={() => <OtherBonuses isRankAndTeam={true} isPopup={true} />} onHide={() => setRewardsForRank(false)} /> }
                {error && <Popup onHide={() => setError('')} isPopup={true} errorText={error} /> }
            </div>
            
            <main className={css.dashboardMain}>
                <WalletInfo crumb='Dashboard' />

                <section className={css.dashboard}>
                    <div className="container">
                        <div className={css.characteristics}>
                            <div className={css.infoItem} data-aos="fade-up">
                                <div className={css.itemInner}>                                    
                                    <div className={css.itemHeader}>
                                        <h2 className={css.infoItemTitle}>Current Level</h2>
                                    </div>
                                    <div className={css.infoBlock}>
                                        <img src={goldIcon} alt="" />
                                        <span>Gold</span>
                                    </div>
                                    <div className={css.warning + " " + css.gradient} onClick={openDirectBonus}>
                                        i
                                    </div>
                                </div>
                            </div>
                            <div className={css.infoItem} data-aos="zoom-in">
                                <div className={css.itemInner}>
                                    <div className={css.itemHeader}>
                                        <h2 className={css.infoItemTitle}>Current Rank</h2>
                                    </div>
                                    <div className={css.infoBlock}>
                                        <span>Rank 1</span>
                                    </div>
                                    <div className={css.warning + " " + css.gradient} onClick={openNeededForNextRank}>
                                        i
                                    </div>
                                </div>
                            </div>
                            <div className={css.infoItem} data-aos="fade-down">
                                <div className={css.itemInner + " " + css.reward}>
                                    <div className={css.rewardLeft}>
                                        <h2 className={css.infoItemTitle}>My reward (USDC)</h2>
                                        <div className={css.infoBlock}>
                                            <span>1,000,000.00</span>
                                        </div>
                                    </div>
                                    <div className={css.btnContainer}>
                                        <Button isFilled={true} style={{ background: "#fff", color: "#000" }}
                                                onClick={() => scrollTop(() => navigate(WALLET_PATH))} className={css.claimBtn}>claim</Button>
                                        <div className={css.warning} onClick={openWarning}>
                                            i
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={css.infoItem} data-aos="fade-up">
                                <h2 className={css.infoItemTitle}>All time reward (USDC)</h2>
                                <div className={css.itemInner + " " + css.reward + " " + css.table}>
                                    <div className={css.rewardLeft}>
                                        <div className={css.infoBlock}>
                                            <span>40,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.itemTable}>
                                    <span>Direct Bonus</span>
                                    <span>5,000</span>
                                    <span>Binary Bonus</span>
                                    <span>20,000</span>
                                    <span>Rank Bonus</span>
                                    <span>5,000</span>
                                    <span>Team Bonus</span>
                                    <span>5,000</span>
                                </div>
                            </div>
                            <div className={css.infoItem} data-aos="zoom-out">
                                <h2 className={css.infoItemTitle}>Next reward (USDC)</h2>
                                <div className={css.itemInner + " " + css.reward + " " + css.table}>
                                    <div className={css.rewardLeft}>
                                        <div className={css.infoBlock}>
                                            <span>40,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.itemTable}>
                                    <span>Direct Bonus</span>
                                    <span>5,000</span>
                                    <span>Binary Bonus</span>
                                    <span>20,000</span>
                                    <span>Rank Bonus</span>
                                    <span>5,000</span>
                                    <span>Team Bonus</span>
                                    <span>5,000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className={css.earlyBirds} data-aos="fade-up">
                    <div className="container">
                        <div className={css.birdsInner}>
                            <img src={cvrBirds} className={css.birdsImage} alt="" />
                            <img src={cvrBirdsMobile} className={css.birdsImage + " " + css.mobile} alt="" />
                            <div className={css.birdsContent}>
                                <h3 className={css.birdsTitle}>early birds bonus</h3>
                                <p className={css.birdsText}>You will be able to claim the bonus after the close of the 10th stage of the CVR token sale</p>
                                <div className={css.btns}>
                                    <Button isFilled={true} style={{ background: "#fff", color: "#000" }}>claim</Button>
                                    <Button isFilled={true} style={{ background: "transparent", border: "1px solid #fff" }}
                                            href="https://metacosmo.space/about-cvr">about cvr</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

            <div className={css.newsContainer}>
                <News />
            </div>

            <Feedback isStayUpdated={true} />
            <Footer />
        </>
    )
}

export default Dashboard