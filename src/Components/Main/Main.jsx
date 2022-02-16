import React, { useEffect } from 'react'
import AffiliateProgram from './AffiliateProgram/AffiliateProgram'
import ConnectMetamask from './ConnectMetamask/ConnectMetamask'
import Info from './Info/Info'
import Introduction from './Introduction/Introduction'
import css from './Main.module.scss'
import MarketingPlan from './MarketingPlan/MarketingPlan'
import MegaPromoProgram from './MegaPromoProgram/MegaPromoProgram'
import Metaverse from './Metaverse/Metaverse'
import Qualify from './Qualify/Qualify'
import TwitterFollowers from './TwitterFolowers/TwitterFollowers'
import ValuableProduct from './ValuableProducts/ValuableProducts'

const Main = ({ changeBackground, background }) => {

    useEffect(async () => {
        changeBackground(background)

        // async function getFollowers() {
        //     const fetchedInfo = await fetch(`${process.env.PUBLIC_URL}/main.php`).then(response => response.json())
        //     return fetchedInfo;
        // }

        // const response = await getFollowers();
        // console.log(response.followers)

    }, [])

    return (
        <>
            <Introduction />
            <TwitterFollowers />
            <ConnectMetamask />
            <ValuableProduct />
            <Metaverse />
            <Info />
            <MarketingPlan />
            <Qualify />
            <AffiliateProgram />
            <MegaPromoProgram />
        </>
    )
}

export default Main