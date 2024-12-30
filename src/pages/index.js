import Head from 'next/head';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
	const carousel_items = [
		'ESTY',
		<div className="point" />,
		'KINGSMAN',
		<div className="point" />,
		'MAKRO',
		<div className="point" />,
		'IT PARK',
		<div className="point" />,
		'ФОРМА',
		<div className="point" />,
		'ARKON',
		<div className="point" />,
	]

	useEffect(() => {
		// Проверяем, включено ли reduced motion
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}

		function addAnimation() {
			const scroller = document.querySelector(".scroller");

			if (scroller) {
				// Проверяем, было ли анимация уже добавлена
				if (scroller.getAttribute("data-animated") === "true") {
					return; // Если анимация уже настроена, выходим
				}

				// Устанавливаем атрибут data-animated
				scroller.setAttribute("data-animated", true);

				const scrollerInner = scroller.querySelector(".scroller__inner");
				const scrollerContent = Array.from(scrollerInner.children);

				// Дублируем элементы внутри контейнера
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(duplicatedItem);
				});
			}
		}
	}, []);

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
				<div className="scroller" dataSpeed="fast">
					<ul className="tag-list scroller__inner">
						{carousel_items.map((item, index) => (
							<li key={index} className="item">
								{item}
							</li>
						))
						}
						{carousel_items.map((item, index) => (
							<li key={`duplicate-${index}`} className="item">
								{item}
							</li>
						))
						}
					</ul>
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
				<div className="d-flex align-items-center gap-20">
					<div className="card">
						<p className="top">
							Более 4х лет на рынке и  опыт в разных сферах
						</p>

						<p className="bottom">
							4+
						</p>
					</div>

					<div className="card">
						<p className="top">
							Множество успешных проектов
						</p>

						<p className="bottom">
							65+
						</p>
					</div>

					<div className="card">
						<p className="top">
							специалисты с опытом не по годам
						</p>

						<p className="bottom">
							18+
						</p>
					</div>

					<div className="card">
						<p className="top">
							в команду входят
						</p>

						<p className="bottom">
							5+
						</p>
					</div>
				</div>
			</section>

			<section className="block_5"></section>

			<section className="block_6">
				<div className="d-flex align-items-center gap-20">
					<div className="card">
						<p className="top">
							Ux/ui Диз. -
							Исламов Камрон
						</p>

						<img src='./images/specialist_1.png' alt='Ux/ui Дизайнер - Исламов Камрон' />
					</div>

					<div className="card">
						<p className="top">
							граф. диз. -
							абдиев амир
						</p>

						<img src='./images/specialist_2.png' alt='Ux/ui Дизайнер - Исламов Камрон' />
					</div>

					<div className="card">
						<p className="top">
							Frontend dev -
							латыпов артём
						</p>

						<img src='./images/specialist_3.png' alt='Ux/ui Дизайнер - Исламов Камрон' />
					</div>

					<div className="card">
						<p className="top">
							backend dev -
							ислом ахмедов
						</p>

						<img src='./images/specialist_4.png' alt='Ux/ui Дизайнер - Исламов Камрон' />
					</div>
				</div>
			</section>

			<section className="block_7">
				<div className="card">
					<p>
						присоединяйся
						к <span className="text-primary">xeond</span> и оптимизируй
						свои процессы
					</p>

					<div className="big-circles">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</section>

			<section className="block_8"></section>

			<section className="block_9"></section>

			<section className="block_10"></section>
		</div>
	);
}
