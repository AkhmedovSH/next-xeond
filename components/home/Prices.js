import Link from 'next/link'
import React from 'react'

function Prices() {
	return (
		<>
			<div className="row prices">
				<div className="col-lg-4">
					<Link href="/price/starter">
						<div className="price_card">
							<div className="price_card_title">Megabyte</div>
							<div className="price_card_row">Логотип</div>
							<div className="price_card_row">1 варианта + презинтация</div>
							<div className="price_card_row">Визуал соц-сетей</div>
							<div className="price_card_row">Шапка профиля </div>
							<div className="price_card_row">8 креативов</div>
							<div className="price_card_row">Другое (на выбор)</div>
							<div className="price_card_price">От 3 900 000 сум</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4">
					<Link href="/price/pro">
						<div className="price_card popular" >
							<div className="price_card_title">Terabyte</div>
							<div className="price_card_row">Логотип</div>
							<div className="price_card_row">3 варианта+презинтация</div>
							<div className="price_card_row">Многостраничный сайт</div>
							<div className="price_card_row">Креативы 12 шт</div>
							<div className="price_card_row">Шапка профиля</div>
							<div className="price_card_row">Другое (на выбор)</div>
							<div className="price_card_price">От 10 900 000 сум</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4">
					<Link href="/price/premium">
						<div className="price_card">
							<div className="price_card_title">Gigabyte</div>
							<div className="price_card_row">Логотип</div>
							<div className="price_card_row">2 варианта + презинтация</div>
							<div className="price_card_row">Лэндинг + 1 стараница</div>
							<div className="price_card_row">Шапка профиля</div>
							<div className="price_card_row">8 креативово</div>
							<div className="price_card_row">Другое (на выбор)</div>
							<div className="price_card_price">От 9 400 000 сум</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Prices