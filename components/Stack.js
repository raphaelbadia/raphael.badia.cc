import { Children } from 'react';

const Stack = ({ children, space = 1 }) => {
	return Children.map(children, (child, index) => {
		if (index > 0)
			return (
				<>
					<div className={`mt-${space}`}></div>
					{child}
				</>
			);
		return child;
	});
};

export default Stack;
