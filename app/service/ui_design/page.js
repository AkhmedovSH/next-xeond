import React from 'react'

import Request from '@components/Request';

function page() {

	return (
		<>
			<div className="container">
				<div>
					<div className="top_bg" />
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
							<div className="price_card_row">Информационный сайт</div>
						</div>
						<div className="col-md-6">
							<div className="price_card_row">Сайт для бизнеса</div>
							<div className="price_card_row">Сайт портфолио</div>
							<div className="price_card_row">Информационный сайт</div>
							<div className="price_card_row">Приложения</div>
						</div>
					</div>
				</div>

				<Request />
			</div>
		</>
	)
}

export default page