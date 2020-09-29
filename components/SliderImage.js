const SliderImage = (props) => {
	const { src, text } = props;
	return (
		<div className="each-slide relative">
			<img src={src} className="pointer-events-none" />
			{text && (
				<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
					{text}
				</span>
			)}
		</div>
	);
};

export default SliderImage;
