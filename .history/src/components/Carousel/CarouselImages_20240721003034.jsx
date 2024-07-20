import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Parallax, Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css';
import Button from '../buttons/Button'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarouselImages = ({ slides }) => {
	const [imgHover, setImgHover] = useState(false);

	return (
		<Swiper
			style={{
				"--swiper-navigation-color": "#fff",
				"--swiper-pagination-color": "#fff",
			}}
			speed={600}
			rewind={true}
			parallax={true}
			modules={[Navigation, Pagination, Parallax, Scrollbar, A11y, Autoplay]}
			spaceBetween={100}
			slidesPerView={1}
			navigation
			loop={true}
			pagination={{ clickable: true }}
			// onSlideChange={() => console.log('slide change')}
			onSlideChange={() => null}
			// onSwiper={(swiper) => console.log(swiper)}
			onSwiper={(swiper) => null}
			autoplay = {{
				delay : 1000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			}}
			className="h-[600px] rounded-lg"
		>
			{slides.map((slide, index) => (
				<SwiperSlide
					key={index}
					className={`relative left-0 top-0 bg-cover bg-center fade-in duration-100 transition-all`}
					onMouseEnter={() => setImgHover(true)}
					onMouseLeave={() => setImgHover(false)}
					style={{
						backgroundImage: `url(${slide.src})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					data-swiper-parallax="-23%"
				>
					{imgHover && (
						<div className="absolute z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 fade-in">
							<div className="px-[50px] grid gap-4 ms-5">
								<div
									className="text-3xl font-bold text-white"
									data-swiper-parallax="-300"
								>
									{slide.title}
								</div>
								<div
									className="text-white text-md"
									data-swiper-parallax="-200"
								>
									{slide.desc}
								</div>

								<NavLink to={"/tour"}>
									<Button>Go Tour</Button>
								</NavLink>
							</div>
						</div>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);
};


CarouselImages.propTypes = {
	slides: PropTypes.arrayOf(
	  PropTypes.shape({
		src: PropTypes.string.isRequired,
		title: PropTypes.string,
		desc: PropTypes.string,
	  })
	).isRequired,
  };

export default CarouselImages;
