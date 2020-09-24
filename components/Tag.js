const Tag = (props) => {
	const { label, color } = props;
	let style;
	switch (color) {
		case 'blue':
			style = `tag bg-blue-200 text-blue-700`;
			break;
		case 'purple':
			style = `tag bg-purple-200 text-purple-700`;
			break;
		case 'gray':
			style = `tag bg-gray-200 text-gray-700`;
			break;
		case 'pink':
			style = `tag bg-pink-200 text-pink-700`;
			break;
		case 'green':
			style = `tag bg-green-200 text-green-700`;
			break;
		case 'orange':
			style = `tag bg-orange-200 text-orange-700`;
			break;
		case 'red':
			style = `tag bg-red-200 text-red-700`;
			break;
		default:
			style = `tag bg-blue-200 text-blue-700`;
			break;
	}

	return (
		<div
			className={`rounded-md inline-flex px-3 py-1 uppercase text-xs font-bold leading-4 ${style}`}
		>
			{label}
		</div>
	);
};

export default Tag;
