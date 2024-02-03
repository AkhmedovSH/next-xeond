'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Header() {
	const router = useRouter()
	const pathname = usePathname()

	async function onScroll(id) {
		if (pathname !== '/') {
			router.push('/', { scroll: false })
			await new Promise(res => setTimeout(res, 300))
		}

		const element = document.getElementById(id)
		if (element) {
			if (window.innerWidth < 992) {
				window.scrollTo(0, element.offsetTop - 150)
			} else {
				window.scrollTo(0, element.offsetTop - 200)
			}
		}
	}

	return (
		<>
			<div className="header_sticky">
				<div className="header_wrapper">
					<div className="header">
						<Link href="/">
							<Image src="/assets/icons/header_logo.svg" width={130} height={50} alt="Главная" className="header_logo" />
						</Link>
						<div className="header_menu">
							<div className="header_menu_item">
								<div onClick={() => onScroll('services')}>услуги</div>
							</div>
							<div className="header_menu_item">
								<div onClick={() => onScroll('owners')}>портфолио</div>
							</div>
							<div className="header_menu_item">
								<div onClick={() => onScroll('about_us')}>о нас</div>
							</div>
						</div>
					</div>
					<a href="tel:+998909324939" className="header_btn">
						<button>
							контакты
						</button>
					</a>
				</div>

				<div className="header_menu second">
					<div className="header_menu_item">
						<div onClick={() => onScroll('services')}>услуги</div>
					</div>
					<div className="header_menu_item">
						<div onClick={() => onScroll('owners')}>портфолио</div>
					</div>
					<div className="header_menu_item">
						<div onClick={() => onScroll('about_us')}>о нас</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header