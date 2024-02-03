'use client'

import { useRef, useState, useEffect } from 'react'

import dynamic from 'next/dynamic';
import Image from 'next/image'

// import Request from '@components/Request';
// import Keyboard from '@components/Keyboard';
// import AboutUs from '@components/home/AboutUs';
// import Services from '@components/home/Services';
// import Prices from '@components/home/Prices';
// import Owners from '@components/home/Owners';

const Request = dynamic(() => import('@components/Request'), {
	loading: () => <></>,
});
const Keyboard = dynamic(() => import('@components/Keyboard'), {
	loading: () => <></>,
	ssr: false,
});
const Owners = dynamic(() => import('@components/home/Owners'), {
	loading: () => <></>,
	ssr: false,
});
const AboutUs = dynamic(() => import('@components/home/AboutUs'), {
	loading: () => <></>,
	ssr: false,
});
const Services = dynamic(() => import('@components/home/Services'), {
	loading: () => <></>,
	ssr: false,
});
const Prices = dynamic(() => import('@components/home/Prices'), {
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

	const services = [
		{ value: '1', text: 'Графический дизайн', emoji: '🎨' },
		{ value: '2', text: 'UX/UI дизайн', emoji: '📺' },
		{ value: '3', text: 'Интерьер дизайн', emoji: '🏬' },
	]

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
							<button className="block_01_btn" onClick={() => window.scrollTo(0, requestRef.current.offsetTop - 130)}>
								Проконсультировать
							</button>
						</div>
						<div className="col-lg-5 keyboard">
							{width > 576 &&
								<Keyboard />
							}
						</div>
					</div>
					<div className="block_01_link">
						Нажмите
						<button className="">RETURN</button>
						чтобы продолжить
					</div>
				</div>
			</div>
			<div className="container">

				<Owners ownersRef={ownersRef} />

				<AboutUs aboutUsRef={aboutUsRef} />
				<div className="row request_block" id="request" ref={requestRef}>
					<div className="col-lg-6">
						<div className="request_block_left">
							<Image src="/assets/images/v_key.png" alt="" height={533} width={460} quality={100} />
						</div>
					</div>
					<div className="col-lg-6">
						<label htmlFor="forLabel"></label>
						<select className="request_select" onChange={(e) => setSendData({ ...sendData, type: e.target.value })} id='forLabel'>
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
				<Services servicesRef={servicesRef} />

				<Prices />

				<Request />
			</div>

			<div className={"toast " + (showSuccess ? 'active' : '')}>
				Успешно
				<Image src="/assets/images/check.png" alt="" height={24} width={24} quality={5} />
			</div>

			<div className={"toast error " + (sendData.showError ? 'active' : '')}>
				{/* <Image src="/assets/icons/times.svg" alt="" height={30} width={30} quality={100} /> */}
				Ошибка: {sendData.error}
			</div>
		</>
	)
}
