import React, { useState, useEffect } from 'react'
import newsStore from '../../store/newsStore'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import css from './Wallet.module.scss'
import Preloader from './../Preloader/Preloader';
import News from '../Main/News/News'
import Feedback from './../Main/Feedback/Feedback';
import Footer from '../Footer/Footer'
import WalletInfo from './../common/WalletInfo/WalletInfo';

const Wallet = (props) => {
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
            <main className={css.walletMain}>
                <WalletInfo crumb='Wallet' />

                <section className={css.aboutWallet}>
                    <div className="container">
                        <div className={css.aboutInner}>
                            <div className={css.walletItem} data-aos="fade-up">
                                <header className={css.itemHeader} data-aos="zoom-out">
                                    <h3 className={css.itemTitle}>Vouchers</h3>
                                    <Button isFilled={true} className={css.claimBtn}>claim</Button>
                                </header>
                                <footer className={css.itemFooter}>
                                    <span>№</span>
                                    <span>Date of issue</span>
                                    <span>Expiration date</span>
                                    <span>Value (USDC)</span>
                                    <span>1</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>2</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>3</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>4</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>5</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                </footer>
                                <Button isFilled={true} className={css.claimBtn + " " + css.mobile}>claim</Button>
                            </div>
                            <div className={css.walletItem + " " + css.statistics} data-aos="fade-down">
                                <header className={css.itemHeader} data-aos="zoom-out">
                                    <h3 className={css.itemTitle}>Transactions</h3>
                                    <Button isFilled={true} style={{opacity: '0', cursor: 'initial'}} className={css.claimBtn}>claim</Button>
                                </header>
                                <footer className={css.itemFooter}>
                                    <span>№</span>
                                    <span>Type</span>
                                    <span>Date</span>
                                    <span>Value (USDC)</span>
                                    <span>1</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>2</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>3</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>4</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                    <span>5</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>1,000,123,00</span>
                                </footer>
                            </div>
                            <div className={css.walletItem + " " + css.statistics} data-aos="fade-up">
                                <header className={css.itemHeader} data-aos="zoom-out">
                                    <h3 className={css.itemTitle}>Cashed vouchers</h3>
                                    <Button isFilled={true} style={{opacity: '0', cursor: 'initial'}}>claim</Button>
                                </header>
                                <footer className={css.itemFooter}>
                                    <span>№</span>
                                    <span>Date</span>
                                    <span>Expiration Date</span>
                                    <span>Txn Hash</span>
                                    <span>Value (USDC)</span>
                                    <span>1</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>0x945687640f496164bf43eb4dbc4b986410ddf7d948cf8e306214e9533aef78a2</span>
                                    <span>1,000,123,00</span>
                                    <span>2</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>0x945687640f496164bf43eb4dbc4b986410ddf7d948cf8e306214e9533aef78a2</span>
                                    <span>1,000,123,00</span>
                                    <span>3</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>0x945687640f496164bf43eb4dbc4b986410ddf7d948cf8e306214e9533aef78a2</span>
                                    <span>1,000,123,00</span>
                                    <span>4</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>0x945687640f496164bf43eb4dbc4b986410ddf7d948cf8e306214e9533aef78a2</span>
                                    <span>1,000,123,00</span>
                                    <span>5</span>
                                    <span>16/05/2022</span>
                                    <span>26/06/2022</span>
                                    <span>0x945687640f496164bf43eb4dbc4b986410ddf7d948cf8e306214e9533aef78a2</span>
                                    <span>1,000,123,00</span>
                                </footer>
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

export default Wallet