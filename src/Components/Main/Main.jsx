import React, { useEffect, useState } from 'react'
import AffiliateProgram from './AffiliateProgram/AffiliateProgram'
import Introduction from './Introduction/Introduction'
import css from './Main.module.scss'
import MarketingPlan from './MarketingPlan/MarketingPlan'
import News from './News/News';
import Feedback from './Feedback/Feedback';
import Join from './Join/Join';
import Bonuses from './Bonuses/Bonuses'
import Snippet from '../common/Snippet/Snippet'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'
import Footer from '../Footer/Footer'

const Main = () => {
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
            <Introduction />
            <Join />
            <AffiliateProgram />
            <MarketingPlan />
            <div className={css.snippetContainer} data-aos="zoom-out">
                <Snippet title={'To get a referral level, you only need to have NFTs from the CosmoLand collection on your MetaMask wallet'} 
                        secondColText={'The higher the level, the more referral rewards you can receive from your referals'}
                        titleWidth={840}
                        secondColTextWidth={640} />
            </div>
            <Bonuses />
            <div className={css.newsContainer}>
                <News />
            </div>
            <Feedback isStayUpdated={true} />
            <Footer />
        </>
    )
}

export default Main