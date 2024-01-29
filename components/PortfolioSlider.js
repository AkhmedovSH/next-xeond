'use client'

import React from 'react'

import Image from 'next/image';

import ScrollContainer from 'react-indiana-drag-scroll';


function PortfolioSlider({ firstImage, items }) {

	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <div></div>,
		nextArrow: <div></div>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<>
			{/* beforeChange={(index) => hanglePageChange(index)} */}
			<ScrollContainer className="portfolio" vertical={false} horizontal={true}>
				{items.map((item, index) => (
					<div className={"portfolio_img " + (item.includes("01") ? "first" : "")}  key={index}>
						<Image src={item} alt="" width={300} height={300} />
					</div>
				))
				}
			</ScrollContainer>
			{/* <Slider {...settings} >
                <div className="portfolio_item">
                    <Image src={firstImage} alt="" fill quality={100} className="portfolio_img" />
                </div>
                {items?.map((item, index) => (
                    <div className="more_item" key={index}>
                        <div className="">

                        </div>
                    </div>
                ))}
            </Slider> */}
		</>
	)
}

export default PortfolioSlider