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
				<title>Исламов Камрон ux/ui & web design</title>
				<meta name="description" content="Xeond Исламов Камрон ux/ui & web design" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className="mobile-margin"></div>

			<section>
				<div className="portfolio-header ux">
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
							Исламов <br />
							Камрон
						</h1>

						<h2 className="title second mobile-hide">
							ux/ui & web <br />
							design
						</h2>
					</div>

					<div className="d-flex justify-content-end mobile-show">
						<h2 className="title second">
							ux/ui & web <br />
							design
						</h2>
					</div>
				</div>
			</section>


			<section className="block_4">
				<div className="card">
					<p className="top">
						Более 4х лет опыта в различных сферах дизайна и моушена
					</p>

					<p className="bottom">
						4+
					</p>
				</div>

				<div className="card">
					<p className="top">
						работа с более чем 7 приложениями в дизайне и анимации
					</p>

					<p className="bottom">
						7+
					</p>
				</div>

				<div className="card">
					<p className="top">
						понимание различных сфер для глубокой интеграции
					</p>

					<p className="bottom">
						{'</>'}
					</p>
				</div>
			</section>

			<section>
				<div className="card">
					/ Кейсы. Makro / Kingsman / It Park / Tehnikum / GoFly / Profyer / AbexLab / Форма / Xeond / Arkon / D:CODE / Qadam Education / Nazz / Shakh Tours / Hon Saroy / HeyFlowers / World Medicine / TCats / MBank / PlaceParking / PDD Uzbekistan
				</div>
			</section>

			<section className="projects">
				<div className="project-row second">
					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									<span className="text-primary">TUZ</span> Agency
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<p className="description">
							Сайт разработан для демонстрации ключевых достижений агентства и продажи услуг. Визуальная концепция поддерживает современный цифровой стиль, отражая экспертность компании.
						</p>

						<div className="project-img">
							<img src="./images/portfolio/ux_1.png" alt="Betrim - Пример ux/ui & web Работы" />
						</div>

					</div>
				</div>

				<div className="project-row second">
					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									<span className="text-primary">World</span> medicine
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<p className="description">
							Проект имеет внутреннюю систему управления врачами, базу данных медицинских представителей, докторов и лечебных учреждений, каждый из которых имеет уникальный дизайн.
						</p>

						<div className="project-img">
							<img src="./images/portfolio/ux_2.png" alt="Betrim - Пример ux/ui & web Работы" />
						</div>

					</div>
				</div>

				{/* <div className="project-row second">
					<div className="project-img">
						<img src="./images/portfolio/ux_2.png" alt="Betrim - Пример ux/ui & web Работы" />
					</div>

					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									<span className="text-primary">makro</span> web&app
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<p className="description">
							Для Makro была проделана большая работа по переработке веб-сайта, редизайна существующего приложения и дизайна нового приложения.
						</p>
					</div>
				</div> */}


				<div className="project-row">
					<div className="project-img">
						<img src="./images/portfolio/ux_3.png" alt="Betrim - Пример ux/ui & web Работы" />
					</div>

					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									<span className="text-primary">PDD</span> Uzbekistan
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<p className="description">
							ПДД Узбекистан 2024 — приложение, созданное для качественной подготовки к теоретическому экзамену на водительские права в Узбекистане. Оно включает все необходимые материалы по правилам дорожного движения и автотестам для удобной и эффективной подготовки.                        </p>
					</div>
				</div>
			</section>

			<Request
				title={
					<p>
						Оставить заявку <br />
						на UX/UI дизайн
					</p>
				}
			/>

			<Footer />
		</>
	)
}

export default Frontend 