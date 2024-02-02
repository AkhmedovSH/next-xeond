'use client'

import { useRef, useState, useEffect } from 'react'
import Slider from "react-slick";

import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import HomeSlider from '@components/HomeSlider';

const Request = dynamic(() => import('@components/Request'), {
	loading: () => <></>,
});
const Keyboard = dynamic(() => import('@components/Keyboard'), {
	loading: () => <></>,
	ssr: false,
});

export default function Home() {
	const servicesRef = useRef()
	const ownersRef = useRef()
	const aboutUsRef = useRef()
	const requestRef = useRef()

	const botToken = '6836523730:AAF_OFdJa39ZaCD3Nra8GS7Z5LSg1DLRn9o'
	const chatId = "@xeond_requests"
	const API = `https://api.telegram.org/bot${botToken}/sendMessage`

	const [width, setWidth] = useState(600)

	const [showSuccess, setShowSuccess] = useState(false)
	const [showMore, setShowMore] = useState(0)

	const services = [
		{ value: '1', text: 'Графический дизайн', emoji: '🎨' },
		{ value: '2', text: 'UX/UI дизайн', emoji: '📺' },
		{ value: '3', text: 'Интерьер дизайн', emoji: '🏬' },
	]

	const graphicDesign = [
		'/assets/images/service/graphic_design/exapmle_01.png',
		'/assets/images/service/graphic_design/exapmle_02.png',
		'/assets/images/service/graphic_design/exapmle_03.png',
		'/assets/images/service/graphic_design/exapmle_04.png',
	]
	const interiorDesign = [
		'/assets/images/service/interior_design/exapmle_01.png',
		'/assets/images/service/interior_design/exapmle_02.png',
		'/assets/images/service/interior_design/exapmle_03.png',
		'/assets/images/service/interior_design/exapmle_04.png',
	]
	const uiDesign = [
		'/assets/images/service/ui_design/exapmle_01.png',
		'/assets/images/service/ui_design/exapmle_02.png',
		'/assets/images/service/ui_design/exapmle_03.png',
		'/assets/images/service/ui_design/exapmle_04.png',
	]

	const [examples, setExamples] = useState([]);

	const [sendData, setSendData] = useState({
		type: '1',
		name: '',
		phoneNumber: '',
		error: '',
		showError: '',
	})

	const handleInputChange = (e) => {
		const value = e.target.value;
		// Проверяем, содержит ли значение только числа и знак плюса, и не превышает ли 13 символов
		if (/^[0-9+]*$/.test(value) && value.length <= 13) {
			setSendData({ ...sendData, phoneNumber: e.target.value })
		}
	};

	async function sendRequest() {
		try {
			if (!sendData.name) {
				setSendData({ ...sendData, error: 'Заполните поле «Имя»', showError: true })
			}
			if (!sendData.phoneNumber) {
				setSendData({ ...sendData, error: 'Заполните поле «Телефон»', showError: true })
			}
			if (!sendData.phoneNumber || !sendData.name) {
				setTimeout(() => {
					setSendData({ ...sendData, showError: false, error: 'Заполните поле' })
				}, 1500);
				return;
			}
			var copySendData = { ...sendData }
			var seriveItem = services.find(item => item.value === copySendData.type)
			const text =
				`Новая заявка!🎉\n\nУслуга: <b>${seriveItem?.text} ${seriveItem?.emoji}</b>\nИмя: <b>${copySendData.name}</b>\nТелефон: <b><a href="https://t.me/${copySendData.phoneNumber}">${copySendData.phoneNumber}</a></b>`;
			const response = await fetch(API, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: chatId,
					parse_mode: 'html',
					text,
				}),
			})
			if (response.ok) {
				setShowSuccess(true)
				setTimeout(() => {
					setShowSuccess(false)
				}, 1500);
				setSendData({ name: '', phoneNumber: '', })
				localStorage.setItem('requestCount', '1')
			}
		} catch (error) {

		}
	}

	function changeShowMore(index) {
		if (index === showMore) {
			setShowMore(null)
		} else {
			setShowMore(index)
			if (index === 1) {
				setExamples(graphicDesign)
			}
			if (index === 2) {
				setExamples(uiDesign)
			}
			if (index === 3) {
				setExamples(interiorDesign)
			}

		}
	}

	useEffect(() => {
		setWidth(window.innerWidth)
	}, []);

	return (
		<>
			<div className="block_01_bg">
				<div className="container">
					<div className="row block_01">
						<div className="col-lg-7">
							<div className="block_01_title">
								Стиль вашего <br />п<b className="italic">рост</b>ранства
							</div>
							<div className="block_01_description">
								Добро пожаловать в студию, где творчество встречает <br />
								функциональность. Воплощаем идеи в жизнь, придавая <br />
								проектам неповторимый стиль и эстетику.
							</div>
							<a onClick={() => window.scrollTo(0, requestRef.current.offsetTop - 130)}>
								<div className="block_01_btn">Проконсультировать</div>
							</a>
						</div>
						<div className="col-lg-5 keyboard">
							{width > 576 &&
								<Keyboard />
							}
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="block_01_link">
					Нажмите
					<button className="">RETURN</button>
					чтобы продолжить
				</div>
				<div className="row owners" id="owners" ref={ownersRef}>
					<div className="col-lg-4">
						<div className="owner">
							<div className="owner_photo">
								<div className="owner_photo_blur" />
								<Image
									src="/assets/images/owner_1.jpg"
									alt=""
									width={500}
									height={500}
									sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 1200px"
								/>
							</div>
							<div className="owner_info">
								<div className="owner_info_text_01">Амир</div>
								<div className="owner_info_text_02">Graphic</div>
							</div>
						</div>
						<div className="owner_exapmles">
							<Image src="/assets/images/exapmle_01.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_02.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_03.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_04.png" alt="" width={90} height={90} />
							<div className={"owner_exapmles_more " + (showMore === 1 ? 'rotate' : '')} onClick={() => changeShowMore(1)}>
								<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}
									viewBox="0 0 32 32" fill="none" >
									<path d="M12 6.6665L20 15.9998L12 25.3332"
										stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
						{showMore === 1 &&
							<HomeSlider showMore={showMore} examples={examples} isSecond={true} />
						}

					</div>
					<div className="col-lg-4">
						<div className="owner">
							<div className="owner_photo">
								<div className="owner_photo_blur second" />
								<Image src="/assets/images/owner_2.jpg" alt=""
									width={500} height={500} quality={100} sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 1200px" />
							</div>
							<div className="owner_info">
								<div className="owner_info_text_01">Бурхон</div>
								<div className="owner_info_text_02">WEB</div>
							</div>
						</div>
						<div className="owner_exapmles">
							<Image src="/assets/images/exapmle_05.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_06.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_07.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_08.png" alt="" width={90} height={90} quality={100} />
							<div className={"owner_exapmles_more " + (showMore === 2 ? 'rotate' : '')} onClick={() => changeShowMore(2)}>
								<svg xmlns="http://www.w3.org/2000/svg" width={32}
									height={32} viewBox="0 0 32 32" fill="none">
									<path d="M12 6.6665L20 15.9998L12 25.3332"
										stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
						{showMore === 2 &&
							<HomeSlider showMore={showMore} examples={examples} isSecond={true} />
						}
					</div>
					<div className="col-lg-4">
						<div className="owner">
							<div className="owner_photo">
								<div className="owner_photo_blur third" />
								<Image
									src="/assets/images/owner_3.jpg" alt=""
									width={500}
									height={500}
									quality={100} sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 1200px" />
							</div>
							<div className="owner_info">
								<div className="owner_info_text_01">Никита</div>
								<div className="owner_info_text_02">Interior</div>
							</div>
						</div>
						<div className="owner_exapmles">
							<Image src="/assets/images/exapmle_09.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_10.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_11.png" alt="" width={90} height={90} />
							<Image src="/assets/images/exapmle_12.png" alt="" width={90} height={90} />
							<div className={"owner_exapmles_more " + (showMore === 3 ? 'rotate' : '')} onClick={() => changeShowMore(3)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={32}
									height={32}
									viewBox="0 0 32 32"
									fill="none"
								>
									<path
										d="M12 6.6665L20 15.9998L12 25.3332"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						{showMore === 3 &&
							<HomeSlider showMore={showMore} examples={examples} isSecond={true} />
						}
					</div>
					<HomeSlider showMore={showMore} examples={examples} />
				</div>
				<div id="about_us" ref={aboutUsRef}>
					<Image src="/assets/images/block_03.png" alt="" className="about_us_img" width={1300} height={325} />
					<div className="about_us">О нас</div>
					<div className="about_us_desription">
						<b className="ml-20">XEOND</b> - основанная в 2024 году, представляет собой инновационную компанию, специализирующуюся в дизайне.
						Наша миссия - создание
						пространств и визуальных решений,которые сочетают в себе современность,
						функциональность и креативность. <br />
						<br />
						<b>Графический дизайн</b> в нашем исполнении ориентирован на создание
						сильных брендов и эффективных визуальных решений. Мы разрабатываем
						логотипы, корпоративный стиль, упаковку и другие элементы графического
						дизайна, подчеркивая уникальные характеристики бренда. <br />
						<br />
						<b>Веб-дизайн</b> xeond фокусируется на создании современных и
						интуитивно понятных веб-сайтов. Мы интегрируем последние
						технологии,чтобы обеспечить наших клиентов функциональными и
						привлекательными онлайн-присутствиями. <br />
						<br />
						<b>Дизайн интерьера</b> xeond предлагает персонализированные
						концепции,интегрируя последние тенденции в дизайне и инновационные
						технологии. Мы стремимся создавать уникальные интерьеры,отражающие стиль
						и потребности наших клиентов.
					</div>
				</div>
				<div className="row request_block" id="request" ref={requestRef}>
					<div className="col-lg-6">
						<div className="request_block_left">
							<Image src="/assets/images/v_key.png" alt="" height={533} width={460} quality={100} />
						</div>
					</div>
					<div className="col-lg-6">
						<select className="request_select" onChange={(e) => setSendData({ ...sendData, type: e.target.value })}>
							{services.map((item, index) => (
								<option value={item.value} key={index}>{item.text}</option>
							))}
						</select>
						<input type="text" className="request_input" placeholder="Имя" value={sendData.name}
							onChange={(e) => setSendData({ ...sendData, name: e.target.value })} />
						<input type="text" className="request_input" placeholder="Номер" value={sendData.phoneNumber}
							onChange={(e) => handleInputChange(e)} maxLength={13} />
						<button className="request_btn" onClick={() => sendRequest()}>Оставить заявку</button>
					</div>
				</div>
				<div className="row services" id="services" ref={servicesRef}>
					<div className="col-lg-4">
						<Link href="/service/graphic_design">
							<div className="service_card">
								<div className="service_card_img">
									<div className="service_card_img_blur" />
									<Image src="/assets/images/service_1.png" alt="" height={300} width={300} quality={100} />
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
									<Image src="/assets/images/service_2.png" alt="" height={300} width={300} quality={100} />
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
									<Image src="/assets/images/service_3.png" alt="" height={300} width={300} quality={100} />
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
				<Request />
			</div>

			<div className={"toast " + (showSuccess ? 'active' : '')}>
				Успешно
				<Image src="/assets/images/check.png" alt="" height={30} width={30} quality={100} />
			</div>

			<div className={"toast error " + (sendData.showError ? 'active' : '')}>
				{/* <Image src="/assets/icons/times.svg" alt="" height={30} width={30} quality={100} /> */}
				Ошибка: {sendData.error}
			</div>
		</>
	)
}
