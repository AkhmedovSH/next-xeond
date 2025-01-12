import React from 'react'
import Head from 'next/head'
import { useTheme } from '../ThemeContext';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image';

function Frontend() {
    const { toggleTheme, theme } = useTheme();

    return (
        <>
            <Head>
                <title>Абдиев Амир Graphic design</title>
                <meta name="description" content="Xeond Абдиев Амир Graphic design" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="mobile-margin"></div>

            <section>
                <div className="portfolio-header graphic">
                    <div className="mobile-hide d-flex justify-content-between align-content-center">
                        <Image src="./icons/logo_text.svg" alt="Логотип Xeond" width={215} height={60} />

                        <div className="d-flex align-items-center gap-20">
                            <div className="circles primary">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <button className="top-button second">
                                RU
                            </button>

                            <button className="top-button" onClick={toggleTheme}>
                                {theme === 'light' ?
                                    <img src="./icons/dark.svg" alt="" />
                                    :
                                    <img src="./icons/light.svg" className="second" alt="" />
                                }
                            </button>
                        </div>
                    </div>

                    <div className="bottom">
                        <h1 className="title">
                            Абдиев <br />
                            Амир
                        </h1>

                        <h2 className="title second mobile-hide">
                            Graphic <br />
                            design
                        </h2>
                    </div>

                    <div className="d-flex justify-content-end mobile-show">
                        <h2 className="title second">
                            Graphic <br />
                            design
                        </h2>
                    </div>
                </div>
            </section>


            <section className="block_4">
                <div className="card">
                    <p className="top">
                        Более 4х лет опыта в различных сферах дизайна
                    </p>

                    <p className="bottom">
                        4+
                    </p>
                </div>

                <div className="card">
                    <p className="top">
                        работа с более чем 5 большими компаниями
                    </p>

                    <p className="bottom">
                        5+
                    </p>
                </div>

                <div className="card">
                    <p className="top">
                        Быстрая адаптация в проектах
                    </p>

                    <p className="bottom">
                        {'</>'}
                    </p>
                </div>
            </section>

            <section className="projects">
                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/portfolio/backend_1.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    Steppe Journeys
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <p className="description">
                            Логотип для steppe journeys
                        </p>
                    </div>
                </div>

                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/portfolio/backend_2.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    ESTY
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <p className="description">
                            Мы обновили бренд компании Esty, которая производит бумажные изделия, такие как салфетки и туалетная бумага. В ходе исследований мы поняли, что нужно сделать визуальный стиль более современным и привлекательным, но при этом сохранить узнаваемость бренда. Новый дизайн включает синий цвет и утку, которая красиво сочетается с буквой 'e' в логотипе, а также оригинальные иллюстрации.
                        </p>
                    </div>
                </div>


                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/portfolio/backend_3.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    next step up school
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <p className="description">
                            Серия постов для социальных сетей, созданных для школы Next Step Up в партнерстве с Камроном. Каждый пост подчеркивает уникальные аспекты обучения и развития. Используются фирменные цвета и современные шрифты для создания динамичного и запоминающегося образа.                        </p>
                    </div>
                </div>
            </section>

            <section className="block_9">
                <div className="card">
                    <div className="title">
                        Оставить заявку <br />
                        на Графический дизайн
                    </div>

                    <button>
                        <span>
                            оставить заявку
                        </span>

                        <div className="star">
                            <img src="./icons/button_star.svg" alt="" />
                        </div>
                    </button>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Frontend 