import SlickSlider from 'react-slick';

const Slider = ({ children, ...rest }) => {
	const config = {
		dots: true,
		// infinite: true,
		// slidesToShow: 1,
		// slidesToScroll: 1,
		autoplay: true,
		lazyLoad: true,
		// speed: 1000,
		// autoplaySpeed: 5000,
		// cssEase: 'linear',
	};
	return (
		<div className="mb-8 mt-3">
			<SlickSlider {...config} {...rest}>
				{children}
			</SlickSlider>
		</div>
	);
};

export default Slider;
