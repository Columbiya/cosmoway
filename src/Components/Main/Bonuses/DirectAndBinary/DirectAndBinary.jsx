import React from 'react'
import css from './DirectAndBinary.module.scss'
import binaryBonusImage from '../../../../assets/index-page/binary-bonus.png'
import directBonusImage from '../../../../assets/index-page/direct-bonus.png'
import metamask from '../../../../assets/index-page/metamask.png'

const DirectAndBinary = ({ withText }) => {
    const popupClasses = !withText ? css.popup: null

    return (
        <>
            {!withText && 
                <h2 className={css.popupTitle}>Needed for the next level: <span className="mark">1,234,456</span> Cosmoland NFTs</h2>
            }
            
            <div className={css.directAndBinaryBonus + " " + popupClasses}>
                <div className="container">
                    <div className={css.innerBinary}>
                        <div className={css.tableContainer}>
                            <div className={css.table}>
                                <div className={css.tableTypes}>
                                    <h2 className={css.tableTitle}><span className={css.mark}>Direct</span> Bonus and <span className={css.mark}>Binary</span> Bonus</h2>
                                    <div className={css.typeItem + ' ' + css.bronze}>
                                        <p>Bronze / Bronze +</p>
                                    </div>
                                    <div className={css.typeItem + ' ' + css.silver}>
                                        <p>Silver / Silver +</p>
                                    </div>
                                    <div className={css.typeItem + ' ' + css.gold}>
                                        <p>Gold / Gold +</p>
                                    </div>
                                    <div className={css.typeItem + ' ' + css.platinum}>
                                        <p>Platinum / Platinum +</p>
                                    </div>
                                </div>
                                <div className={css.directBonus}>
                                    <h2 className={css.bonusTitle}>Direct Bonus</h2>
                                    <div className={css.bonusLevels}>
                                        <span className={css.level}>Lvl 1</span>
                                        <span className={css.level}>Lvl 2</span>
                                        <span className={css.level}>Lvl 3</span>
                                        <span className={css.level}>Lvl 4</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>5 %</span>
                                        <span>1 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>5 %</span>
                                        <span>2 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>6 %</span>
                                        <span>2 %</span>
                                        <span>1 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>7 %</span>
                                        <span>3 %</span>
                                        <span>1 %</span>
                                        <span>1 %</span>
                                    </div>
                                </div>
                                <div className={css.binaryBonus}>
                                    <h2 className={css.bonusTitle}>Binary Bonus</h2>
                                    <div className={css.bonusLevels + ' ' + css.noBackground}></div>
                                    <div className={css.row}>
                                        <span>5 % <span>/</span> 6 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>7 % <span>/</span> 8 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>9 % <span>/</span> 10 %</span>
                                    </div>
                                    <div className={css.row}>
                                        <span>11 % <span>/</span> 12 %</span>
                                    </div>
                                </div>
                                <div className={css.paymentSystem}>
                                    <img src={metamask} alt="metamask" />
                                    <p>Payment system <strong>Metamask</strong></p>
                                </div>
                                <img src={binaryBonusImage} className={css.binaryImage} alt="" />
                                <img src={directBonusImage} className={css.tableDirectImage} alt="" />
                            </div>
                        </div>

                        {withText && 
                            <div className={css.text}>
                                <p>
                                    To participate in the affiliate program, you must qualify
                                    by purchasing the NFT from <span className={css.mark}>CosmoLand</span> collection.
                                </p>
                                <p>
                                    To activate the affiliate program, you must have one partner on the
                                    right binary leg and one partner on the left binary leg.
                                </p>
                                <p>
                                    The binary bonus is given every day if the platform agent has
                                    enough points on the left and right binary legs.
                                </p>
                                <p>
                                    A binary pair is counted by the number of points in a weak binary leg.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DirectAndBinary