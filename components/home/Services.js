import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

function Services({ servicesRef }) {
	return (
		<>
			<div className="row services" id="services" ref={servicesRef}>
				<div className="col-lg-4">
					<Link href="/service/graphic_design">
						<div className="service_card">
							<div className="service_card_img">
								<div className="service_card_img_blur" />
								<Image src="/assets/images/service_1.webp" alt="" height={300} width={300} quality={100} />
							</div>
							<div className="service_card_info">Графический дизайн</div>
							<div className="service_card_text">
								Создание уникальных символов и стилей, которые идентифицируют
								компанию или продукт.
							</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4">
					<Link href="/service/ui_design">
						<div className="service_card">
							<div className="service_card_img">
								<div className="service_card_img_blur second" />
								<Image src="/assets/images/service_2.webp" alt="" height={300} width={300} quality={100} />
							</div>
							<div className="service_card_info">UX/UI дизайн</div>
							<div className="service_card_text">
								Работа над внешним видом веб-сайтов, мобильных приложений и других
								интерактивных систем.
							</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4">
					<Link href="/service/interior_design">
						<div className="service_card">
							<div className="service_card_img">
								<div className="service_card_img_blur third" />
								<Image src="/assets/images/service_3.webp" alt="" height={300} width={300} quality={100} />
							</div>
							<div className="service_card_info">Интерьер дизайн</div>
							<div className="service_card_text">
								Создает гармоничные композиции, выбирает мебель, цветовые решения и
								освещение.
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Services