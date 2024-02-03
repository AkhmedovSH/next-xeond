'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import HomeSlider from '@components/HomeSlider'

function Owners({ ownersRef }) {

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

	const [showMore, setShowMore] = useState(0)

	const [examples, setExamples] = useState([]);

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
		const lazyLoadImages = () => {
			const images = document.querySelectorAll('img[data-src]');
			images.forEach(img => {
				img.src = img.getAttribute('data-src');
				img.onload = () => {
					img.removeAttribute('data-src');
				};
			});
		};

		lazyLoadImages()
	}, []);

	return (
		<>
			<div className="row owners" id="owners" ref={ownersRef}>
				<div className="col-lg-4">
					<div className="owner">
						<div className="owner_photo">
							<div className="owner_photo_blur" />
							<Image
								src="/assets/images/owner_1.webp"
								alt="Амир"
								width={300}
								height={300}
								quality={1}
								priority
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
							<Image
								src="/assets/images/owner_2.webp"
								alt="Бурхон"
								width={300}
								height={300}
								priority />
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
						<Image src="/assets/images/exapmle_08.png" alt="" width={90} height={90} />
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
								src="/assets/images/owner_3.webp"
								alt="Никита"
								width={300}
								height={300}
								priority />
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
		</>
	)
}

export default Owners