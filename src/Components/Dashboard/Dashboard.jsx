import React, { useEffect, useState } from 'react'
import css from './Dashboard.module.scss'
import goldIcon from '../../assets/gold-icon.png'
import Footer from '../Footer/Footer'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import News from '../Main/News/News'
import Feedback from '../Main/Feedback/Feedback'
import cvrBirds from '../../assets/dashboard/early-birds-image.png'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'

const Dashboard = () => {
    const [youOwn, setYouOwn] = useState(0)
    const [wallet, setWallet] = useState('')
    const [isLoading, setLoading] = useState(true)

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

    return (
        <>
            <main className={css.dashboardMain}>
                <section className={css.wallet}>
                    <div className="container">
                        <div className={css.walletInner}>
                            <BreadCrumbs crumb={'Dashboard'} />
                            <div className={css.walletInfo}>
                                <p><strong>You own:</strong> <span className="mark"><strong>{youOwn}</strong></span> Cosmoland NFTs</p>
                                <p><strong>WALLET:</strong> {wallet}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={css.dashboard}>
                    <div className="container">
                        <div className={css.characteristics}>
                            <div className={css.infoItem}>
                                <div className={css.itemInner}>
                                    <h2 className={css.infoItemTitle}>Current Level</h2>
                                    <div className={css.infoBlock}>
                                        <img src={goldIcon} alt="" />
                                        <span>Gold</span>
                                    </div>
                                </div>
                            </div>
                            <div className={css.infoItem}>
                                <div className={css.itemInner}>
                                    <h2 className={css.infoItemTitle}>Current Rank</h2>
                                    <div className={css.infoBlock}>
                                        <span>Rank 1</span>
                                    </div>
                                </div>
                            </div>
                            <div className={css.infoItem}>
                                <div className={css.itemInner + " " + css.reward}>
                                    <div className={css.rewardLeft}>
                                        <h2 className={css.infoItemTitle}>My reward (USDC)</h2>
                                        <div className={css.infoBlock}>
                                            <span>1,000,000.00</span>
                                        </div>
                                    </div>
                                    <div className={css.btnContainer}>
                                        <Button isFilled={true} style={{ background: "#fff", color: "#000" }}>claim</Button>
                                        <div className={css.warning}>
                                            i
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={css.infoItem}>
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
                            <div className={css.infoItem}>
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

                <section className={css.earlyBirds}>
                    <div className="container">
                        <div className={css.birdsInner}>
                            <img src={cvrBirds} className={css.birdsImage} alt="" />
                            <div className={css.birdsContent}>
                                <h3 className={css.birdsTitle}>early birds bonus</h3>
                                <p className={css.birdsText}>You will be able to claim the bonus after the close of the 10th stage of the CVR token sale</p>
                                <div className={css.btns}>
                                    <Button isFilled={true} style={{ background: "#fff", color: "#000" }}>claim</Button>
                                    <Button isFilled={true} style={{ background: "transparent", border: "1px solid #fff" }}>about cvr</Button>
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