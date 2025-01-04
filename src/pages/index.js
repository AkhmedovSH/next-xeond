import Head from 'next/head';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

import Footer from '../components/Footer'
import Header from '../components/Header';
import { useTheme } from '../ThemeContext';

export default function Home() {
	const { toggleTheme } = useTheme();

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

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],

	};


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
				<meta name="description" content="XEOND - основанная в 2024 году, представляет собой инновационную компанию, специализирующуюся в дизайне. Наша миссия - создание пространств и визуальных решений" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<section className="block_01 mobile-hide">
				<div className="left_card">
					<div className="d-flex justify-content-between align-items-center mb-100">
						<img src="./icons/logo_text.svg" alt="Логотип xeond" width={215} height={60} />

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
					<Slider {...settings} arrows={false}>
						<img src="./images/carousel_1.png" alt="Пример работы компании xeond" height={1000} />
						<img src="./images/carousel_1.png" alt="Пример работы компании xeond" height={1000} />
						<img src="./images/carousel_1.png" alt="Пример работы компании xeond" height={1000} />
					</Slider>

					<div className="left">
						<div className="d-flex gap-10">
							<button className="top-button">
								<img src="./icons/star.svg" alt="" />
							</button>

							<button className="top-button second">
								<img src="./icons/arrow_white.svg" alt="" />
							</button>
						</div>

						<div className="carousel-description">
							<span className="text-primary">Paul Patisserie</span> <br />
							redesign concept
						</div>
					</div>

					<div className="right">
						<button className="top-button second">
							RU
						</button>

						<button className="top-button" onClick={toggleTheme}>
							<img src="./icons/dark.svg" alt="" />
						</button>
					</div>
				</div>
			</section>

			<section className="block_01 mobile-show">
				<div className="carousel">
					<img src="./images/carousel_1.png" alt="" height={400} />

					<ul className="navigation">
						<li>о нас</li>
						<li>наши кейсы</li>
						<li>исполнители</li>
						<li>тарифы</li>
					</ul>
				</div>

				<div className="card">
					<div className="d-flex justify-content-between align-items-start">
						Выходим за <br />
						орбиту <br />
						возможного

						<div className="circles primary">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
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
			</section>

			<section className="block_5 block_01">
				<div className="right_card">
					<Slider {...settings} arrows={false}>
						<img src="./images/carousel_1.png" alt="Пример работы компании xeond" height={1000} />
						<img src="./images/carousel_1.png" alt="Пример работы компании xeond" height={1000} />
						<img src="./images/carousel_1.png" alt="Пример работы компании xeond" height={1000} />
					</Slider>

					<div className="left">
						<div className="d-flex gap-10">
							<button className="top-button">
								<img src="./icons/star.svg" alt="" />
							</button>

							<button className="top-button second">
								<img src="./icons/arrow_white.svg" alt="" />
							</button>
						</div>

						<div className="carousel-description">
							<span className="text-orange">Кейсы</span> наших <br />
							дизайнеров
						</div>
					</div>
				</div>

				<div className="card">
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="title">
							<span className="text-orange">PAUL</span> PATISSERIE
						</h3>

						<div className="circles orange">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<p className="description">
						Для сети <b>PAUL</b> мы обновили логотип и фирменный стиль. Наши исследования показали необходимость в современном обновлении, сохранив при этом узнаваемость бренда.
					</p>
				</div>
			</section>

			<section className="block_6">
				<div className="card">
					<p className="top">
						<b>Ux/ui Диз. -</b> <br />
						Исламов Камрон
					</p>

					<div className="text-end">
						<img src='./images/specialist_1.png' alt='Ux/ui Дизайнер - Исламов Камрон' width={240} height={240} />
					</div>
				</div>

				<div className="card">
					<p className="top">
						<b>граф. диз. -</b> <br />
						абдиев амир
					</p>

					<div className="text-end">
						<img src='./images/specialist_2.png' alt='Ux/ui Дизайнер - Исламов Камрон' width={240} height={240} />
					</div>
				</div>

				<div className="card">
					<p className="top">
						<b>Frontend dev -</b> <br />
						латыпов артём
					</p>

					<div className="text-end">
						<img src='./images/specialist_3.png' alt='Ux/ui Дизайнер - Исламов Камрон' width={240} height={240} />
					</div>
				</div>

				<div className="card">
					<p className="top">
						<b>backend dev -</b> <br />
						ислом ахмедов
					</p>

					<div className="text-end">
						<img src='./images/specialist_4.png' alt='Ux/ui Дизайнер - Исламов Камрон' width={240} height={240} />
					</div>
				</div>
			</section>

			<section className="block_7">
				<div className="card">
					<div>
						<p>
							присоединяйся <br />
							к <span className="text-primary">xeond</span> и оптимизируй <br />
							свои процессы
						</p>
					</div>

					<div className="big-circles primary">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</section>

			<section className="block_8">
				<div className="card">
					<p className="title">
						ux/ui дизайн + <span className="text-primary">web</span>
					</p>

					<div className="images">
						<img src='./images/ux_1.png' alt='Пример ux/ui дизайн' width={100} height={100} />
						<img src='./images/ux_2.png' alt='Пример ux/ui дизайн' width={100} height={100} />
						<img src='./images/ux_3.png' alt='Пример ux/ui дизайн' width={100} height={100} />
					</div>

					<p className="description">
						UX/UI + веб-дизайн — создание стильного и удобного интерфейса для вашего сайта или приложения, улучшая взаимодействие с пользователями.
					</p>

					<div className="d-flex align-items-center justify-content-between">
						<button className="left-btn mobile-hide w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать <br />
							подробнее
						</button>

						<div className="right">
							<p className="text-center">
								<b>$1250 в месяц</b> <br />
								<span className="text-primary">+WEB</span> в подарок
							</p>
							<button className="right-btn">
								выбрать
							</button>
						</div>

						<button className="left-btn mobile-show w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать
							подробнее
						</button>
					</div>
				</div>

				<div className="card">
					<p className="title">
						графический дизайн
					</p>

					<div className="images">
						<img src='./images/graphic_1.png' alt='Пример ux/ui дизайн' width={100} height={100} />
						<img src='./images/graphic_2.png' alt='Пример ux/ui дизайн' width={100} height={100} />
						<img src='./images/graphic_3.png' alt='Пример ux/ui дизайн' width={100} height={100} />
					</div>

					<p className="description">
						Создание визуальных элементов, которые делают ваш бренд узнаваемым и привлекательным для аудитории.
					</p>

					<div className="d-flex align-items-center justify-content-between">
						<button className="left-btn mobile-hide w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать <br />
							подробнее
						</button>

						<div className="right">
							<p className="text-end">
								<b>
									$840 <br />
									в месяц
								</b>
							</p>
							<button className="right-btn">
								выбрать
							</button>
						</div>

						<button className="left-btn mobile-show w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать
							подробнее
						</button>
					</div>
				</div>

				<div className="card">
					<p className="title">
						Frontend dev
					</p>

					<p className="description">
						Создание интерактивной и адаптивной части сайта, с которой взаимодействуют пользователи. Мы обеспечиваем быстрый отклик, удобную навигацию и корректное отображение на любых устройствах.
					</p>

					<div className="d-flex align-items-center justify-content-between">
						<button className="left-btn mobile-hide w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать <br />
							подробнее
						</button>

						<div className="right">
							<p className="text-end">
								<b>
									$1100 <br />
									в месяц
								</b>
							</p>
							<button className="right-btn">
								выбрать
							</button>
						</div>

						<button className="left-btn mobile-show w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать
							подробнее
						</button>
					</div>
				</div>

				<div className="card">
					<p className="title">
						backend dev
					</p>

					<p className="description">
						Разработка серверной части для обеспечения надёжной работы сайта, управления данными и интеграции с внешними сервисами.
					</p>

					<div className="d-flex align-items-center justify-content-between">
						<button className="left-btn mobile-hide w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать <br />
							подробнее
						</button>

						<div className="right">
							<p className="text-end">
								<b>
									$1500 <br />
									в месяц
								</b>
							</p>
							<button className="right-btn">
								выбрать
							</button>
						</div>

						<button className="left-btn mobile-show w-100">
							<img src="./icons/book.svg" alt="Читать  подробнее" width={32} height={32} />
							Читать
							подробнее
						</button>
					</div>
				</div>

			</section>

			<section className="block_9">
				<div className="card">
					<div className="title">
						работаем по-проектно <br />
						и без посредников
					</div>

					<button>
						оставить заявку
					</button>
				</div>
			</section>

			<section className="block_10">
				<div className="card">
					<p className="title">
						<b>Ux/ui Диз. -</b> <br />
						портфолио
					</p>

					<button>
						<img src="./icons/arrow.svg" alt="Читать  подробнее" width={120} height={120} />
					</button>
				</div>

				<div className="card">
					<p className="title">
						<b>граф. диз. -</b> <br />
						портфолио
					</p>

					<button>
						<img src="./icons/arrow.svg" alt="Читать  подробнее" width={120} height={120} />
					</button>
				</div>

				<div className="card">
					<p className="title">
						<b>Frontend dev</b> <br />
						портфолио
					</p>

					<button>
						<img src="./icons/arrow.svg" alt="Читать  подробнее" width={120} height={120} />
					</button>
				</div>

				<div className="card">
					<p className="title">
						<b>backend dev</b> <br />
						портфолио
					</p>

					<button>
						<img src="./icons/arrow.svg" alt="Читать  подробнее" width={120} height={120} />
					</button>
				</div>
			</section>

			<Footer />
		</div>
	);
}
