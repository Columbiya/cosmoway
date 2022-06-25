import React, { useState } from 'react'
import newsStore from '../../../store/newsStore'
import Button from '../../common/Button/Button'
import css from './News.module.scss'
import New from './New/New'
import { observer } from 'mobx-react-lite';
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './StylesSwiper.scss'

const News = ({ noAos }) => {
    const [currentIndex, setIndex] = useState(1)
    const [slidesAmount, setAmount] = useState(0)
    const news = newsStore.news

    let index = 1
    
    
    return (
        <section className={css.news} data-aos={noAos ? null: "zoom-in"}>
            <div className="container">
                <header className={css.header}>
                    <h2 className={css.title} data-aos={noAos ? null: "fade-down"}>News</h2>
                    <Button isColorBlack={true} href="https://metacosmo.space/news">
                        learn more
                    </Button>
                    <span className={css.sliderIndex}><strong>{currentIndex}</strong> / {slidesAmount}</span>
                </header>
                <Swiper className={css.footer}
                        onSlideChange={(swiper) => setIndex(swiper.activeIndex + 1)}
                        onSwiper={(swiper) => setAmount(swiper.slides.length)}
                        spaceBetween={15}
                        breakpoints={{
                            300: {
                                width: 300,
                                slidesPerView: 1
                            },
                            450: {
                                width: 430,
                                slidesPerView: 1
                            },
                            620: {
                                width: 600,
                                slidesPerView: 1
                            },
                            800: {
                                width: 800,
                                slidesPerView: 2
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 3
                            },
                            1550: {
                                width: 1500,
                                slidesPerView: 4
                            },
                        }}>
                    {news.map(oneNew => (
                        <SwiperSlide key={oneNew.id} index={index++}>
                            <New {...oneNew} noAos={noAos} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default observer(News)