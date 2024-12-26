import Head from 'next/head';

// import logo_text from './icons/logo_text.svg'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Xeond</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="block_01">
				<div className="left_card">
					<div className="d-flex justify-content-between align-items-center mb-100">
						<div className="">
							<img src="./icons/logo_text.svg" alt="Логотип xeond" width={215} height={60} />
						</div>

						<div className="circles primary">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<ul className="navigation">
						<li>о нас</li>
						<li>наши кейсы</li>
						<li>исполнители</li>
						<li>тарифы</li>
					</ul>

					<h1 className="title">
						Выходим за <br />
						<span>орбиту</span> возможного
					</h1>
				</div>

				<div className="right_card">

				</div>
			</section>

			<section className="block_2"></section>
			<section className="block_3"></section>
			<section className="block_4"></section>
			<section className="block_5"></section>
			<section className="block_6"></section>
			<section className="block_7"></section>
			<section className="block_8"></section>
			<section className="block_9"></section>
			<section className="block_10"></section>
		</div>
	);
}
