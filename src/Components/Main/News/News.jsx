import React from 'react'
import newsStore from '../../../store/newsStore'
import Button from '../../common/Button/Button'
import css from './News.module.scss'
import New from './New/New'
import { observer } from 'mobx-react-lite';

const News = ({ noAos }) => {
    const news = newsStore.news
    
    return (
        <section className={css.news} data-aos={noAos ? null: "zoom-in"}>
            <div className="container">
                <header className={css.header}>
                    <h2 className={css.title} data-aos={noAos ? null: "fade-down"}>News</h2>
                    <Button isColorBlack={true} data-aos={noAos ? null: "fade-down"}>
                        learn more
                    </Button>
                </header>
                <footer className={css.footer}>
                    {news.map(oneNew => (
                        <New {...oneNew} noAos={noAos} key={oneNew.id} />
                    ))}
                </footer>
            </div>
        </section>
    )
}

export default observer(News)