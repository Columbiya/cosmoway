import React, { useEffect, useState, useRef } from 'react'
import Button from '../common/Button/Button'
import css from './ReferalTree.module.scss'
import userIcon from '../../assets/referral-tree/user.png'
import referralUserIcon from '../../assets/referral-tree/referral-user.png'
import referralArrowIcon from '../../assets/referral-tree/referral-arrow.png'
import freeSpaceIcon from '../../assets/referral-tree/free-place.png'
import firstRowLine from '../../assets/referral-tree/firstRowLine.png'
import secondRowLine from '../../assets/referral-tree/second-row-line.png'
import thirdRowLine from '../../assets/referral-tree/third-row-line.png'
import silverIcon from '../../assets/silver-icon.png'
import bronzeIcon from '../../assets/bronze-icon.png'
import platinumIcon from '../../assets/platinum-icon.png'
import copyImg from '../../assets/referral-tree/link-icon.png'
import goldIcon from '../../assets/referral-tree/gold-icon.png'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Footer from '../Footer/Footer'
import News from '../Main/News/News'
import Preloader from '../Preloader/Preloader'
import Feedback from '../Main/Feedback/Feedback'
import newsStore from '../../store/newsStore'
import WalletInfo from '../common/WalletInfo/WalletInfo'

const ReferalTree = () => {
    const teams = ['Left Team', 'Right Team'];
    let [isHidden, setIsHidden] = useState(true)
    let [active, setActive] = useState(teams[0])
    let [isRight, setIsRight] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [youOwn, setYouOwn] = useState(0)
    const [wallet, setWallet] = useState('')

    let ref = useRef(null)
    const rightTeam = useRef(null)
    const leftTeam = useRef(null)
    const tree = useRef(null)
    const link = useRef(null)

    const hiddenClass = isHidden ? css.hidden : null;

    useEffect(() => {
        async function getNews() {
            await newsStore.getNews()
            setLoading(false)
        }

        getNews()
    }, [])

    const onDropDownClick = e => {
        setIsHidden(!isHidden)
    }

    const onItemClick = e => {
        setActive(e.target.innerHTML)
        ref.current.innerHTML = e.target.innerHTML
    }

    const onToggleTree = e => {
        if (!isRight) {
            tree.current.scrollLeft = rightTeam.current.offsetLeft - window.innerWidth / 2 + rightTeam.current.clientHeight / 2;
        }
        else {
            tree.current.scrollLeft = leftTeam.current.offsetLeft - window.innerWidth / 2 + leftTeam.current.clientHeight / 2;;
        }

        setIsRight(!isRight)
    }

    const onCopyLink = async e => {
        await navigator.clipboard.writeText(link.current.innerHTML)
        await alert(`link copied to the clipboard`)
    }

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <main className={css.treeMain}>
                <WalletInfo crumb='Referral Tree' />

                <section className={css.referal}>
                    <div className="container">
                        <h1 className={css.title}>Distribution of referrals</h1>
                        <div className={css.buttons}>
                            <div className={css.buttonsLeft}>
                                <div className={css.dropDown} onClick={onDropDownClick}>
                                    <span className={css.selected} ref={ref}>{active}</span>
                                    <div className={css.dropDownContent + ' ' + hiddenClass}>
                                        {teams.filter((team) => team != active).map(team =>
                                            <span onClick={onItemClick} key={team}>
                                                {team}
                                            </span>
                                        )}

                                    </div>
                                </div>
                                <div className={css.copyLink} onClick={onCopyLink}>
                                    <a className={css.referralLink} ref={link}>https://cosmoway.net/hfuuij8du9L/</a>
                                    <img src={copyImg} className={css.copyImg} alt="copy" />
                                </div>
                            </div>
                            <div className={css.buttonsNav}>
                                <Button style={{ padding: "23px 50px", width: "auto" }} isFilled={true}>to my account</Button>
                                <Button style={{ padding: "23px 50px", width: "auto" }} isFilled={true}>one level up</Button>
                                <Button style={{ padding: "23px 50px", width: "auto" }} isFilled={true}>refresh</Button>
                            </div>
                        </div>
                        <div className={css.info}>
                            <div className={css.team}>
                                <header className={css.teamHeader}>
                                    <h2 className={css.teamTitle}>Left Team</h2>
                                    <div className={css.teamKind}>
                                        Weak Team
                                    </div>
                                </header>
                                <footer className={css.teamFooter}>
                                    <div className={css.teamValue}>
                                        <span className={css.itemText}><strong>Team value</strong></span>
                                        <span className={css.itemText}><strong>1,234,567 USDC</strong></span>
                                    </div>
                                    <div className={css.footerInfo}>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>Members</span>
                                            <span className={css.mark}>5</span>
                                        </div>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>NFTs</span>
                                            <span className={css.mark}>5,000</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>

                            <div className={css.team + ' ' + css.account}>
                                <header className={css.teamHeader + ' ' + css.yourAccount}>
                                    <h2 className={css.teamTitle}>Your Account</h2>
                                </header>
                                <footer className={css.teamFooter + ' ' + css.yourAccount}>
                                    <div className={css.teamValue + " " + css.yourAccount}>
                                        <span className={css.itemText}><strong>Current level</strong></span>
                                        <span className={css.itemText}><img src={goldIcon} alt="gold" /><strong> Gold</strong></span>
                                    </div>
                                    <div className={css.footerInfo}>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>Team Members</span>
                                            <span className={css.mark}>3,000</span>
                                        </div>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>Direct referrals</span>
                                            <span className={css.mark}>100</span>
                                        </div>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>Reward (all time)</span>
                                            <span className={css.mark}>500,000 USDC</span>
                                        </div>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>Next week reward</span>
                                            <span className={css.mark}>6,000 USDC</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                            <div className={css.team}>
                                <header className={css.teamHeader}>
                                    <h2 className={css.teamTitle}>Right Team</h2>
                                    <div className={css.teamKind}>
                                        Strong Team
                                    </div>
                                </header>
                                <footer className={css.teamFooter}>
                                    <div className={css.teamValue}>
                                        <span className={css.itemText}><strong>Team value</strong></span>
                                        <span className={css.itemText}><strong>1,234,567 USDC</strong></span>
                                    </div>
                                    <div className={css.footerInfo}>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>Members</span>
                                            <span className={css.mark}>5</span>
                                        </div>
                                        <div className={css.teamInfoItem}>
                                            <span className={css.itemText}>NFTs</span>
                                            <span className={css.mark}>5,000</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                            <div className={css.team + ' ' + css.mobileAccount}>
                                <header className={css.teamHeader + ' ' + css.yourAccount}>
                                    <h2 className={css.teamTitle}>Your Account</h2>
                                    <div className={css.user}>
                                        <div className={css.userRight}>
                                            <span>Level</span>
                                            <div className={css.userSubscription}>
                                                Silver +
                                            </div>
                                        </div>
                                        <div className={css.userIcon}>
                                            <img src={userIcon} alt="user" />
                                        </div>
                                    </div>
                                </header>
                                <footer className={css.teamFooter + ' ' + css.yourAccount}>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}><strong>Level value</strong></span>
                                        <span className={css.mark + ' ' + css.itemNumber}><strong>2,000 USDC</strong></span>
                                    </div>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}>NFT</span>
                                        <span className={css.mark}>1,000</span>
                                    </div>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}>CLP</span>
                                        <span className={css.mark}>5,000</span>
                                    </div>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}>Team Members</span>
                                        <span className={css.mark}>3,000</span>
                                    </div>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}>Direct referrals</span>
                                        <span className={css.mark}>100</span>
                                    </div>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}>Reward (all time)</span>
                                        <span className={css.mark}>500,000 USDC</span>
                                    </div>
                                    <div className={css.teamInfoItem}>
                                        <span className={css.itemText}>Next week reward</span>
                                        <span className={css.mark}>6,000 USDC</span>
                                    </div>
                                </footer>
                            </div>
                        </div>

                        <div className={css.buttonsNav + ' ' + css.mobileButtons}>
                            <Button text={'to my account'} className={css.referralButton} isHollow={false} />
                            <Button text={'one level up'} className={css.referralButton} isHollow={false} />
                            <Button text={'refresh'} className={css.referralButton} isHollow={false} />
                        </div>

                        <div className={css.treeToggle} onClick={onToggleTree}>
                            <div className={css.toggler + ' ' + (isRight ? css.moved : null)}></div>
                            <span className={!isRight ? css.white : null}>
                                Left
                            </span>
                            <span className={isRight ? css.white : null}>
                                Right
                            </span>
                        </div>


                        <div className={css.referralTree} ref={tree}>
                            <div className={css.treeRow + ' ' + css.firstLine}>
                                <img src={firstRowLine} className={css.treeFirstRowImage} alt="" />
                                <div className={css.treeItem} ref={leftTeam}>
                                    <img src={referralUserIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1005</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={silverIcon} alt="" />
                                            Silver +
                                        </div>
                                    </footer>
                                </div>
                                <div className={css.treeItem} ref={rightTeam}>
                                    <img src={referralUserIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1009</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={silverIcon} alt="" />
                                            Silver
                                        </div>
                                    </footer>
                                </div>
                            </div>
                            <div className={css.treeRow + ' ' + css.secondLine}>
                                <img src={secondRowLine} className={css.secondRowImage} alt="" />
                                <img src={secondRowLine} className={css.secondRowImage + ' ' + css.secondLine} alt="" />
                                <div className={css.treeItem}>
                                    <img src={referralUserIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1006</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={goldIcon} alt="" />
                                            Gold +
                                        </div>
                                    </footer>
                                </div>
                                <div className={css.treeItem}>
                                    <img src={referralArrowIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1007</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={platinumIcon} alt="" />
                                            Platinum +
                                        </div>
                                    </footer>
                                </div>
                                <div className={css.treeItem}>
                                    <img src={referralUserIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1010</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={goldIcon} alt="" />
                                            Gold
                                        </div>
                                    </footer>
                                </div>
                                <div className={css.treeItem}>
                                    <img src={referralArrowIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1011</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={platinumIcon} alt="" />
                                            Platinum
                                        </div>
                                    </footer>
                                </div>
                            </div>
                            <div className={css.treeRow + ' ' + css.thirdLine}>
                                <img src={thirdRowLine} className={css.thirdRowLine} alt="" />
                                <img src={thirdRowLine} className={css.thirdRowLine + ' ' + css.second} alt="" />
                                <img src={thirdRowLine} className={css.thirdRowLine + ' ' + css.third} alt="" />
                                <img src={thirdRowLine} className={css.thirdRowLine + ' ' + css.forth} alt="" />
                                <div className={css.treeItem + ' ' + css.freePlace}>
                                    <img src={freeSpaceIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>Free place</span>
                                    </footer>
                                </div>
                                <div className={css.treeItem + ' ' + css.freePlace}>
                                    <img src={freeSpaceIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>Free place</span>
                                    </footer>
                                </div>
                                <div className={css.treeItem}>
                                    <img src={referralArrowIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1008</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={bronzeIcon} alt="" />
                                            Bronze +
                                        </div>
                                    </footer>
                                </div>
                                <div className={css.treeItem + ' ' + css.freePlace}>
                                    <img src={freeSpaceIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>Free place</span>
                                    </footer>
                                </div>
                                <div className={css.treeItem + ' ' + css.freePlace}>
                                    <img src={freeSpaceIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>Free place</span>
                                    </footer>
                                </div>
                                <div className={css.treeItem + ' ' + css.freePlace}>
                                    <img src={freeSpaceIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>Free place</span>
                                    </footer>
                                </div>
                                <div className={css.treeItem}>
                                    <img src={referralArrowIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>ID 1012</span>
                                        <div className={css.referralSubscrType}>
                                            <img src={bronzeIcon} alt="" />
                                            Bronze
                                        </div>
                                    </footer>
                                </div>
                                <div className={css.treeItem + ' ' + css.freePlace}>
                                    <img src={freeSpaceIcon} alt="" />
                                    <footer className={css.referralUserFooter}>
                                        <span>Free place</span>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <News />

            <Feedback isStayUpdated={true} />

            <Footer />
        </>


    )
}

export default ReferalTree