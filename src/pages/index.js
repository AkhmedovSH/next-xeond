import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
	const carousel_items = [
		'ESTY',
		'KINGSMAN',
		'MAKRO',
		'IT PARK',
		'ФОРМА',
		'ARKON',
	]

	return (
		<div>
			<Head>
				<title>Xeond</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="block_01">
				<div className="left_card">
					<div className="d-flex justify-content-between align-items-center mb-100">
						<div className="">
							<img src="./icons/logo_text.svg" alt="Логотип xeond" width={215} height={60} />
						</div>

						<div className="circles primary">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<ul className="navigation">
						<li>о нас</li>
						<li>наши кейсы</li>
						<li>исполнители</li>
						<li>тарифы</li>
					</ul>

					<h1 className="title">
						Выходим за <br />
						<span>орбиту</span> возможного
					</h1>
				</div>

				<div className="right_card">
					<img src="./images/carousel_1.png" alt="" className="w-100" />
				</div>
			</section>

			<section className="block_2">
				<div className="card">
					<Carousel showArrows={true} >
						{
							carousel_items.map((item, index) => (
								<div key={index}>
									{item}
								</div>
							))}
					</Carousel>
				</div>
			</section>

			<section className="block_3">
				<div className="card">
					<p>
						<b>Xeond</b> — это инновационная студия, которая объединяет искусство дизайна и мощь технологий для создания уникальных цифровых решений. Мы специализируемся на разработке игр, сайтов, приложений и сервисов, предоставляя полный цикл услуг — от концепции до готового продукта.
						<br /><br />
						Наша миссия — превращать идеи в качественные проекты, которые вдохновляют пользователей и обеспечивают нашим клиентам успех. Мы верим в силу индивидуального подхода, креативности и технологического мастерства, что позволяет нам находить идеальные решения даже для самых сложных задач.
						<br /><br />
						С Xeond ваш проект станет не просто функциональным, но и стильным, выделяющимся и запоминающимся.
						Мы создаём не просто код — мы создаём впечатления.
					</p>
				</div>
			</section>

			<section className="block_4">
				<div className="d-flex align-items-center">
					<div className="card">

					</div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
				</div>
			</section>
			<section className="block_5"></section>
			<section className="block_6"></section>
			<section className="block_7"></section>
			<section className="block_8"></section>
			<section className="block_9"></section>
			<section className="block_10"></section>
		</div>
	);
}
