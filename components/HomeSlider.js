'use client'

import React from 'react'
import Slider from 'react-slick'

import Image from 'next/image'
import Link from 'next/link'



function HomeSlider({ showMore, examples, isSecond }) {
	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
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
	};

	return (
		<>
			<div className={"more " + (showMore ? 'show ' : '') + (isSecond ? 'second' : '')} id="more">
				<Slider {...settings}>
					{examples.map((item, index) => (
						<Link key={index} href={showMore === 1 ? "/service/graphic_design" : showMore === 2 ? '/service/ui_design' : '/service/interior_design'} >
							<div className="more_item">
								<Image src={item} alt="" fill quality={100} className="about_us_img" />
							</div>
						</Link>
					))}
				</Slider>
			</div>
		</>
	)
}

export default HomeSlider