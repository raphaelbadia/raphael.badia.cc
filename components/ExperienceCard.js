import Tags from './Tags';

const ExperienceCard = (props) => {
	const {
		jobTitle,
		company,
		dates,
		description,
		technos,
		onMoreDetails,
	} = props;
	return (
		<div className="flex flex-col">
			<div className="flex justify-between flex-col sm:flex-row">
				<span className="gold-title">{`${jobTitle.toUpperCase()} | ${company}`}</span>
				<span className=" font-normal text-gray-700">{dates}</span>
			</div>
			<div className="py-2">
				<blockquote className="text-sm md:text-base bg-gray-100 px-4 py-2 text-gray-700">
					{description}
				</blockquote>
			</div>
			<div className="pb-1">
				<Tags list={technos} />
			</div>
			<div
				className="text-center block font-semibold text-gray-600 mt-1 underline cursor-pointer"
				onClick={onMoreDetails}
			>
				<span className="print:hidden">Voir en détail</span>
				<span className="hidden print:inline">
					Visitez https://raphael.badia.cc pour une version enrichie de ce cv !
				</span>
			</div>
		</div>
	);
};

export default ExperienceCard;
