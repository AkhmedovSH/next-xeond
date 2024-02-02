import React from 'react'

import Request from '@components/Request';
import PortfolioSlider from '@components/PortfolioSlider';

function page() {

	const items = {
		makro: [
			{
				img: '/assets/images/service/ui_design/portfolio/makro_01.png',
				title: 'Makro'
			},
			'/assets/images/service/ui_design/portfolio/makro_02.png',
			'/assets/images/service/ui_design/portfolio/makro_03.png',
			'/assets/images/service/ui_design/portfolio/makro_04.png',
		],
		atrix: [
			{
				img: '/assets/images/service/ui_design/portfolio/atrix_01.png',
				title: 'Atrix'
			},
			'/assets/images/service/ui_design/portfolio/atrix_02.png',
			'/assets/images/service/ui_design/portfolio/atrix_03.png',
			'/assets/images/service/ui_design/portfolio/atrix_04.png',
		],
		goFly: [
			{
				img: '/assets/images/service/ui_design/portfolio/go_fly_01.png',
				title: 'GoFly'
			},
			'/assets/images/service/ui_design/portfolio/go_fly_02.png',
			'/assets/images/service/ui_design/portfolio/go_fly_03.png',
		],
	}

	return (
		<>
			<div className="container">
				<div>
					<div className="top_bg " />
					<div className="top_title">
						UX/UI дизайн
					</div>
				</div>

				<div className="price_card second mb-50">
					<div className="row">
						<div className="col-md-6">
							<div className="price_card_row">Что делает UX/UI и веб дизайнер?</div>
							<div className="price_card_row">Лендинги</div>
							<div className="price_card_row">Многостраничный сайт</div>
							<div className="price_card_row">Сайт-визитка</div>
							<div className="price_card_row">Интернет-магазин</div>
						</div>
						<div className="col-md-6">
							<div className="price_card_row">Сайт для бизнеса</div>
							<div className="price_card_row">Сайт портфолио</div>
							<div className="price_card_row">Информационный сайт</div>
							<div className="price_card_row">Приложения</div>
						</div>
					</div>
				</div>

				<Request defaultType={'2'} />

				<div>
					<div className="top_bg ui_design" />
					<div className="top_title">
						Портфолио
					</div>
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.makro} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.atrix} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.goFly} />
				</div>

				<Request defaultType={'2'} />
			</div>
		</>
	)
}

export default page