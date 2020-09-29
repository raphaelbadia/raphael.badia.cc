const Link = ({ href, children }) => {
	return (
		<a href={href} target="_blank" className="text-yellow-600 font-bold">
			{children}
		</a>
	);
};

export default Link;
