import React from 'react'

import Request from '@components/Request';
import PortfolioSlider from '@components/PortfolioSlider';

function page() {

	const items = {
		logo: [
			{
				img: '/assets/images/service/graphic_design/portfolio/logo_01.png',
				title: 'Логотипы'
			},
			'/assets/images/service/graphic_design/portfolio/logo_02.png',
			'/assets/images/service/graphic_design/portfolio/logo_03.png',
		],
		smmPost: [
			{
				img: '/assets/images/service/graphic_design/portfolio/smm_post_01.png',
				title: 'SMM посты'
			},
			'/assets/images/service/graphic_design/portfolio/smm_post_02.png',
			'/assets/images/service/graphic_design/portfolio/smm_post_03.png',
			'/assets/images/service/graphic_design/portfolio/smm_post_04.png',
			'/assets/images/service/graphic_design/portfolio/smm_post_05.png',
		],
		estyCatalog: [
			{
				img: '/assets/images/service/graphic_design/portfolio/esty_catalog_01.png',
				title: 'Esty каталог'
			},
			'/assets/images/service/graphic_design/portfolio/esty_catalog_02.png',
			'/assets/images/service/graphic_design/portfolio/esty_catalog_03.png',
			'/assets/images/service/graphic_design/portfolio/esty_catalog_04.png',
			'/assets/images/service/graphic_design/portfolio/esty_catalog_05.png',
			'/assets/images/service/graphic_design/portfolio/esty_catalog_06.png',
		],
		esty: [
			{
				img: '/assets/images/service/graphic_design/portfolio/esty_01.png',
				title: 'Esty'
			},
			'/assets/images/service/graphic_design/portfolio/esty_02.png',
			'/assets/images/service/graphic_design/portfolio/esty_03.png',
			'/assets/images/service/graphic_design/portfolio/esty_04.png',
			'/assets/images/service/graphic_design/portfolio/esty_05.png',
			'/assets/images/service/graphic_design/portfolio/esty_06.png',
		],
		packages: [
			{
				img: '/assets/images/service/graphic_design/portfolio/packages_01.png',
				title: 'Упаковки'
			},
			'/assets/images/service/graphic_design/portfolio/packages_02.png',
			'/assets/images/service/graphic_design/portfolio/packages_03.png',
			'/assets/images/service/graphic_design/portfolio/packages_04.png',
			'/assets/images/service/graphic_design/portfolio/packages_05.png',
		]
	}

	return (
		<>
			<div className="container">
				<div>
					<div className="top_bg" />
					<div className="top_title">
						Графический дизайн
					</div>
				</div>

				<div className="price_card second mb-50">
					<div className="row">
						<div className="col-md-6">
							<div className="price_card_row">Что делает графический дизайнер?</div>
							<div className="price_card_row">Презентации</div>
							<div className="price_card_row">Упаковки товаров</div>
							<div className="price_card_row">Визуалы для соцсетей</div>
							<div className="price_card_row">Мерчи</div>
							<div className="price_card_row">Логотипы</div>
						</div>
						<div className="col-md-6">
							<div className="price_card_row">Каталоги, листовки, буклеты</div>
							<div className="price_card_row">Банера</div>
							<div className="price_card_row">Ребрендинг</div>
							<div className="price_card_row">Визитки</div>
						</div>
					</div>
				</div>

				<Request defaultType={'1'} />

				<div>
					<div className="top_bg graphic_design" />
					<div className="top_title">
						Портфолио
					</div>
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.logo} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.smmPost} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.esty} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.packages} />
				</div>

				<div className="mb-50">
					<PortfolioSlider items={items.estyCatalog} />
				</div>

				<Request defaultType={'1'} />
			</div>
		</>
	)
}

export default page