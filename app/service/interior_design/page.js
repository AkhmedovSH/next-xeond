import React from 'react'

import Request from '@components/Request';
import PortfolioSlider from '@components/PortfolioSlider';

function page() {

	const items = {
		kitchen: [
			{
				img: '/assets/images/service/interior_design/portfolio/kitchen_01.png',
				title: 'Кухня с залом'
			},
			'/assets/images/service/interior_design/portfolio/kitchen_02.png',
			'/assets/images/service/interior_design/portfolio/kitchen_03.png',
		],
		bathroom_01: [
			{
				img: '/assets/images/service/interior_design/portfolio/bathroom_01.png',
				title: 'Ванная'
			},
			'/assets/images/service/interior_design/portfolio/bathroom_02.png',
			'/assets/images/service/interior_design/portfolio/bathroom_03.png',
		],
		bathroom_02: [
			{
				img: '/assets/images/service/interior_design/portfolio/bathroom_04.png',
				title: 'Ванная'
			},
			'/assets/images/service/interior_design/portfolio/bathroom_05.png',
			'/assets/images/service/interior_design/portfolio/bathroom_06.png',
		],
		bedroom: [
			{
				img: '/assets/images/service/interior_design/portfolio/bedroom_01.png',
				title: 'Спальня'
			},
			'/assets/images/service/interior_design/portfolio/bedroom_02.png',
			'/assets/images/service/interior_design/portfolio/bedroom_03.png',
		],
	}

	return (
		<>
			<div className="container">
				<div>
					<div className="top_bg" />
					<div className="top_title">
						Интерьер дизайн
					</div>
				</div>

				<div className="price_card second mb-50">
					<div className="row">
						<div className="col-md-6">
							<div className="price_card_row">Что делает интерьер дизайнер?</div>
							<div className="price_card_row">Сбор информации</div>
							<div className="price_card_row">Разработка концепции</div>
							<div className="price_card_row">Составление плана</div>
							<div className="price_card_row">Выбор материалов и мебели</div>
							<div className="price_card_row">Визуализация </div>
						</div>
						<div className="col-md-6">
							<div className="price_card_row">Разработка технических чертежей</div>
							<div className="price_card_row">Контроль выполнения проекта</div>
							<div className="price_card_row">Подготовка к окончательной сдаче клиенту</div>
						</div>
					</div>
				</div>

				<Request defaultType={'3'} />

				<div>
					<div className="top_bg interior_design" />
					<div className="top_title">
						Портфолио
					</div>
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.kitchen} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.bathroom_01} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.bathroom_02} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.bedroom} />
				</div>

				<Request defaultType={'3'} />
			</div>
		</>
	)
}

export default page