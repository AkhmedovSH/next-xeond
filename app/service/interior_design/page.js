import React from 'react'

import Request from '@components/Request';

function page() {

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

				<Request />
			</div>
		</>
	)
}

export default page