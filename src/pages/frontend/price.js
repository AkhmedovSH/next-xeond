import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Request from '../../components/Request';

import { useTheme } from '../../ThemeContext'

function price() {
	const { toggleTheme, theme } = useTheme();

	return (
		<>
			<Head>
				<title>Пакет Frontend  разработки на месяц</title>
				<meta name="description" content="Пакет Frontend  разработки на месяц" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className="mobile-margin"></div>

			<section className="p-0">
				<div className="portfolio-header second price">
					<div className="mobile-hide d-flex justify-content-between align-content-center">
						<Link href='/'>
							<Image src="../icons/logo_text_white.svg" alt="Логотип Xeond" width={215} height={60} />
						</Link>

						<div className="d-flex align-items-center gap-20">
							<button className="top-button second">
								RU
							</button>

							<button className="top-button" onClick={toggleTheme}>
								{theme === 'light' ?
									<img src="../icons/dark.svg" alt="" />
									:
									<img src="../icons/light.svg" className="second" alt="" />
								}
							</button>
						</div>
					</div>

					<div className="center">
						<h1 className="title">
							Документация к услуге <br />
							frontend разработчика
						</h1>
					</div>

				</div>
			</section>

			<div className="container">
				<div className="price-column">
					<h3 className="price-title">
						Пакет Backend | Mobile <br />
						разработчика на месяц
					</h3>

					<div className="card">
						<p>Исполнитель: Ахмедов Ислом</p>
					</div>

					<p>
						<b>Как Frontend разработчик</b>, предлагаю комплексное решение для создания и поддержки веб-интерфейсов. Мой опыт охватывает frontend разработку и мобильные приложения. Использую современный стек технологий для создания эффективных и масштабируемых решений.
					</p>

					<div className="card">
						<b>Технологический стек и услуги</b> <br />

						<b>Фронтенд-разработка</b>
						<p className="point">
							Next.js: Server-side rendering, оптимизация производительности, создание масштабируемых веб-приложений с использованием React экосистемы.
						</p>
						<p className="point">
							Vue.js: Разработка реактивных single-page applications, создание динамических компонентов, интеграция с существующими системами.
						</p>
						<p className="point">
							React: Построение пользовательских интерфейсов с компонентным подходом, управление состоянием приложения, создание переиспользуемых UI компонентов.
						</p>
						<p className="point">
							Адаптивная вёрстка: Реализация отзывчивых интерфейсов для всех типов устройств, кроссбраузерная совместимость.
						</p>

						<br /><br />

						<b>Мобильная разработка</b>
						<p className="point">
							Flutter приложения: Разработка нативно-выглядящих приложений с поддержкой Material Design и Cupertino.
						</p>
						<p className="point">
							Интеграция с нативными функциями: Работа с камерой, геолокацией, push-уведомлениями и другими возможностями устройства.
						</p>

						<br /><br />

						<b>Техническая поддержка</b>
						<p className="point">
							Мониторинг и отладка: Отслеживание производительности приложений, исправление багов.
						</p>
						<p className="point">
							Обновление зависимостей: Поддержка актуальных версий библиотек и фреймворков.
						</p>

						<br /><br />

						<b>Консультации и код-ревью</b>
						<p className="point">
							Технические консультации: Помощь в выборе технологий и архитектурных решений.
						</p>
						<p className="point">
							Код-ревью: Проверка качества кода, оптимизация производительности, следование лучшим практикам разработки.
						</p>

					</div>

					<div className="card">
						<p className="point">
							Получение и согласование технических заданий: Все задачи начинаются с согласования технического задания с Заказчиком.
						</p>
						<p className="point">
							Срок выполнения задач: Стандартные задачи выполняются в течение 2-3 рабочих дней. Крупные проекты (редизайн сайта, создание прототипа приложения) выполняются в течение 5-7 рабочих дней.
						</p>
						<p className="point">
							Правки: Безграничное количество правок до полного удовлетворения Заказчика.
						</p>
					</div>

					<div className="card">
						<b>Дополнительные условия</b>

						<p className="point">
							<b>Приостановка пакета</b>: Возможность приостановки пакета на срок не более 7 дней в месяц, если у Заказчика нет текущих задач.
						</p>
						<p className="point">
							<b>Отчетность</b>: В конце месяца предоставляется отчет о выполненных задачах.
						</p>
						<p className="point">
							<b>Ограничение по количеству ТЗ</b>: Одновременно может быть дано только одно техническое задание. Следующее ТЗ можно предоставить только после завершения работы над предыдущим.
						</p>
						<p className="point">
							<b>Ограничение по большим услугам</b>: В одно техническое задание нельзя включать более одной крупной услуги (например, дизайн каталога, логотипа или проведение ребрендинга). Если в ТЗ включена крупная услуга, она выполняется отдельно без добавления других услуг.

						</p>
						<p className="point">
							<b>Включение нескольких услуг в одно ТЗ</b>: Заказчик имеет право включать до трёх различных услуг в одно техническое задание.
						</p>
						<p className="point">
							<b>Форс-мажор</b>: Стороны освобождаются от ответственности за полное или частичное невыполнение обязательств по данному пакету в случае наступления форс-мажорных обстоятельств, таких как: природные катастрофы, военные действия, террористические акты, гражданские беспорядки, правительственные решения или другие непредвиденные и неизбежные обстоятельства, препятствующие выполнению обязательств.
						</p>

					</div>

					{/* <div>
                        <b>Стоимость пакета</b>
                        <p className="point">
                            Общая стоимость услуг: Стоимость услуг зависит от сложности и объёма работы. Каждый проект оценивается индивидуально, и итоговая цена формируется на основе требований и специфики задачи.
                        </p>

                        <b>Контактная информация</b>
                        <p className="point">
                            Исполнитель: Ахмедов Ислом Икром угли
                        </p>
                        <p className="point">
                            Контактные данные : +998 (99) 819-88-58
                        </p>
                    </div> */}
				</div>


			</div>

			<Request
				title={
					<p>
						Оставить заявку иконки <br />
						на Frontend разработчика
					</p>
				}
			/>

			<Footer />
		</>
	)
}

export default price