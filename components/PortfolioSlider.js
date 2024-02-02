'use client'

import React from 'react'

import Image from 'next/image';

import ScrollContainer from 'react-indiana-drag-scroll';


function PortfolioSlider({ items }) {

	return (
		<>
			<ScrollContainer className="portfolio" vertical={false} horizontal={true}>
				{items.map((item, index) => (
					item?.img ?
						<div className="portfolio_img first" key={index}>
							<Image src={item?.img} alt="" width={600} height={300} />
							<div className="portfolio_title">
								{item.title}
							</div>
						</div>
						:
						<div className="portfolio_img " key={index}>
							<Image src={item} alt="" width={300} height={300} />
						</div>
				))
				}
			</ScrollContainer>
		</>
	)
}

export default PortfolioSlider