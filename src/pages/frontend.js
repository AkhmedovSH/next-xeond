import React from 'react'
import Head from 'next/head'
import { useTheme } from '../ThemeContext';

import Header from '../components/Header'
import Footer from '../components/Footer'

function Frontend() {
    const { toggleTheme, theme } = useTheme();

    return (
        <>
            <Head>
                <title>Ахмедов Ислом Frontend Development</title>
                <meta name="description" content="Xeond FRONTEND DEVELOPMENT Ислом Ахмедов Портфолио Html, Css Dart - Flutter Javascript - Vue React, Next, Php - Laravel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section>
                <div className="portfolio-header frontend">
                    <div className="d-flex justify-content-between align-content-center">
                        <img src="./icons/logo_text.svg" alt="Логотип Xeond" width={215} height={60} />

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
                                    <img src="./icons/light.svg" alt="" />
                                }
                            </button>
                        </div>
                    </div>

                    <div className="bottom">
                        <h1 className="title">
                            Ислом <br />
                            ахмедов
                        </h1>

                        <h2 className="title second">
                            FRONTEND <br />
                            DEVELOPMENT
                        </h2>
                    </div>
                </div>
            </section>


            <section className="block_4">
                <div className="card">
                    <p className="top">
                    </p>

                    <p className="top">
                        <b>Html, Css</b> <br />
                        Dart - Flutter <br />
                        Javascript - Vue <br />
                        React, Next <br />
                        Php - Laravel <br />
                    </p>
                </div>

                <div className="card">
                    <p className="top">
                        Опыта в Develop
                        разработке
                    </p>

                    <p className="bottom">
                        4+
                    </p>
                </div>

                <div className="card">
                    <p className="top">
                        успешно завершенных
                        больших проектов
                    </p>

                    <p className="bottom">
                        15+
                    </p>
                </div>

                <div className="card">
                    <p className="top">
                        В совершенстве
                        владения языков
                    </p>

                    <p className="bottom">
                        3+
                    </p>
                </div>
            </section>

            <section className="projects">
                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/frontend_1.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    Betrim
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <p className="description">
                                Автоматизация заправок с интеграцией оплаты через Payme, Click и налоговую
                            </p>
                        </div>

                        <div className="d-flex flex-wrap gap-10">
                            <div className="card-content">
                                <div className="top">
                                    Роль
                                </div>
                                <div className="bottom">
                                    Полностью курировал проект от начала до конца.
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Используемый стек
                                </div>
                                <div className="bottom">
                                    React, Laravel, <br />
                                    Electron, Flutter.
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Результаты
                                </div>
                                <div className="bottom">
                                    Приложение автоматизирует оплату и генерирует отчеты для кассиров и бухгалтерии.
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Ссылка
                                </div>
                                <div className="bottom">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/frontend_2.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    Mdokon
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <p className="description">
                                Автоматизация торговых точек
                            </p>
                        </div>

                        <div className="d-flex flex-wrap gap-10">
                            <div className="card-content">
                                <div className="top">
                                    Роль
                                </div>
                                <div className="bottom">
                                    Разрабатывал web и мобильное приложение
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Используемый стек
                                </div>
                                <div className="bottom">
                                    React, Electron, Flutter
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Результаты
                                </div>
                                <div className="bottom">
                                    Автоматизация всех бизнес процессов магазина
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Ссылка
                                </div>
                                <div className="bottom">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/frontend_3.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    Anorbank <br />
                                    & IpotekaBank
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <p className="description">
                                Документооборот банка
                            </p>
                        </div>

                        <div className="d-flex flex-wrap gap-10">
                            <div className="card-content">
                                <div className="top">
                                    Роль
                                </div>
                                <div className="bottom">
                                    Разработка и поддержка web приложения
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Используемый стек
                                </div>
                                <div className="bottom">
                                    TypeScript, Vue
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Результаты
                                </div>
                                <div className="bottom">
                                    Контроль всех документов онлайн и электронными подписями
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Ссылка
                                </div>
                                <div className="bottom">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/frontend_4.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    Vonus
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <p className="description">
                                Фронтенд частью приложения
                            </p>
                        </div>

                        <div className="d-flex flex-wrap gap-10">
                            <div className="card-content">
                                <div className="top">
                                    Роль
                                </div>
                                <div className="bottom">
                                    Архитектура, код, тестирование, интеграции
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Используемый стек
                                </div>
                                <div className="bottom">
                                    Javascript, React
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Результаты
                                </div>
                                <div className="bottom">
                                    Биржа с возможностью просмотра текущей цены и покупкой криптовалюты
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Ссылка
                                </div>
                                <div className="bottom">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="project-row">
                    <div className="project-img">
                        <img src="./images/frontend_5.png" alt="Betrim - Пример Frontend Работы" />
                    </div>

                    <div className="card">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h3 className="title">
                                    Mison
                                </h3>

                                <div className="circles primary">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <p className="description">
                                Автоматизация ресторанов и общепитов
                            </p>
                        </div>

                        <div className="d-flex flex-wrap gap-10">
                            <div className="card-content">
                                <div className="top">
                                    Роль
                                </div>
                                <div className="bottom">
                                    Приложения для официантов, курьеров и владельцев
                                    Telegram bot, qr menu и т.д
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Используемый стек
                                </div>
                                <div className="bottom">
                                    React, React Native, Electron, Flutter
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Результаты
                                </div>
                                <div className="bottom">
                                    Автоматизация всех бизнес процессов магазина
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="top">
                                    Ссылка
                                </div>
                                <div className="bottom">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block_9">
                <div className="card">
                    <div className="title">
                        Оставить заявку <br />
                        на Frontend разработку
                    </div>

                    <button>
                        оставить заявку
                    </button>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Frontend 