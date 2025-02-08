import React from 'react'
import Head from 'next/head'
import { useTheme } from '../../ThemeContext';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image';
import Request from '../../components/request';
import Link from 'next/link';

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
									Логотипы
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<div className="project-images">
							<img src="./images/portfolio/graphic_logo_1.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_2.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_3.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_4.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_5.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_6.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_7.png" alt="Пример Graphic design Работы" />
							<img src="./images/portfolio/graphic_logo_8.png" alt="Пример Graphic design Работы" />
						</div>
					</div>
				</div>

				<div className="project-row second">
					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									СММ посты
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<div className="project-images second">
							<div className="project-images-card">
								<img src="./images/portfolio/graphic_smm_1_1.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_1_2.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_1_3.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_1_4.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_1_5.png" alt="Пример Graphic design Работы" />
							</div>

							<div className="project-images-card">
								<img src="./images/portfolio/graphic_smm_2_1.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_2_2.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_2_3.png" alt="Пример Graphic design Работы" />
							</div>

							<div className="project-images-card">
								<img src="./images/portfolio/graphic_smm_3_1.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_3_2.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_3_3.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_3_4.png" alt="Пример Graphic design Работы" />
							</div>

							<div className="project-images-card">
								<img src="./images/portfolio/graphic_smm_4_1.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_4_2.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_4_3.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_4_4.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_4_5.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_smm_4_6.png" alt="Пример Graphic design Работы" />
							</div>
						</div>
					</div>
				</div>

				<div className="project-row second">
					<div className="card">
						<div>
							<div className="d-flex justify-content-between align-items-center mb-10">
								<h3 className="title">
									продукты
								</h3>

								<div className="circles primary">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>

						<div className="project-images second">
							<div className="project-images-card">
								<img src="./images/portfolio/graphic_product_1_1.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_1_2.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_1_3.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_1_4.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_1_5.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_1_6.png" alt="Пример Graphic design Работы" />
							</div>

							<div className="project-images-card">
								<img src="./images/portfolio/graphic_product_2_1.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_2_2.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_2_3.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_2_4.png" alt="Пример Graphic design Работы" />
								<img src="./images/portfolio/graphic_product_2_5.png" alt="Пример Graphic design Работы" />
							</div>
						</div>
					</div>
				</div>

			</section>

			<Request
				title={
					<p>
						Оставить заявку <br />
						на Графический дизайн
					</p>
				}
			/>

			<Footer />
		</>
	)
}

export default Frontend 