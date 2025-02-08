import React from 'react'
import Head from 'next/head'
import { useTheme } from '../../ThemeContext';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image';
import Request from '../../components/Request';
import Link from 'next/link';

function Frontend() {
	const { toggleTheme, theme } = useTheme();

	return (
		<>
			<Head>
				<title>Латыпов Артём Backend Development</title>
				<meta name="description" content="Xeond Backend DEVELOPMENT Латыпов Артём Портфолио Python, Dart, JavaScript, C++" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className="mobile-margin"></div>

			<section>
				<div className="portfolio-header backend">
					<div className="mobile-hide d-flex justify-content-between align-content-center">
						<Link href='/'>
							<Image src="./icons/logo_text.svg" alt="Логотип Xeond" width={215} height={60} />
						</Link>

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
							Латыпов <br />
							артём
						</h1>

						<h2 className="title second mobile-hide">
							BACKEND <br />
							DEVELOPMENT
						</h2>
					</div>

					<div className="d-flex justify-content-end mobile-show">
						<h2 className="title second">
							BACKEND <br />
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
						Python, <br />
						Dart, <br />
						JavaScript, <br />
						C++ <br />
					</p>
				</div>

				<div className="card">
					<p className="top">
						языков знающих
						в совершенстве
					</p>

					<p className="bottom">
						4+
					</p>
				</div>

				<div className="card">
					<p className="top">
						опыта работы в
						разработке
					</p>

					<p className="bottom">
						2+
					</p>
				</div>

				<div className="card">
					<p className="top">
						больших завершенных
						проектов
					</p>

					<p className="bottom">
						3+
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
									Colibri-tattoo
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<div className="d-flex flex-wrap gap-10">
							<div className="card-content">
								<div className="top">
									Роль
								</div>
								<div className="bottom">
									Архитектура, код, тестирование, интеграции.
								</div>
							</div>

							<div className="card-content">
								<div className="top">
									Используемый стек
								</div>
								<div className="bottom">
									Python, Django, PostgreSQL, Celery, Bot.py, React.
								</div>
							</div>

							<div className="card-content">
								<div className="top">
									Результаты
								</div>
								<div className="bottom">
									Полная автоматизация бронирования, автоматическое обновление контента
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
						<img src="./images/portfolio/backend_2.png" alt="Betrim - Пример Frontend Работы" />
					</div>

					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									makro
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
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
									Dart, Flutter, dio.dart.
								</div>
							</div>

							<div className="card-content">
								<div className="top">
									Результаты
								</div>
								<div className="bottom">
									Приложение для системы бонусов в сети магазинов макро
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
						<img src="./images/portfolio/backend_3.png" alt="Betrim - Пример Frontend Работы" />
					</div>

					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									T-cats
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
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
									Python, Django, PostgreSql.
								</div>
							</div>

							<div className="card-content">
								<div className="top">
									Результаты
								</div>
								<div className="bottom">
									Удобный оборот билетов через сайт, с полной минимализацией действий.
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

			<Request
				title={
					<p>
						Оставить заявку <br />
						на Backend разработку
					</p>
				}
			/>

			<Footer />
		</>
	)
}

export default Frontend 