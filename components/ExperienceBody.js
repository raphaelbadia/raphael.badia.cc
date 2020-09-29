import ExperienceHeader from './ExperienceHeader';

const ExperienceBody = ({ children }) => {
	return (
		<div className="max-w-screen-lg lg:mx-auto print:mx-auto px-8 py-3">
			{children}
		</div>
	);
};

export default ExperienceBody;
