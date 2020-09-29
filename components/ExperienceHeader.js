const ExperienceHeader = (props) => {
	const { title, subtitle, isImage, className } = props;
	return (
		<div className={`${className} p-8 h-64 flex flex-col justify-center`}>
			<h3 className="text-white text-4xl text-center">{title}</h3>
			<h4 className="text-white text-xl text-center leading-6">{subtitle}</h4>
		</div>
	);
};

export default ExperienceHeader;
