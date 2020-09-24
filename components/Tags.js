import { Fragment } from 'react';
import Tag from './Tag';

const Tags = (props) => {
	const { list } = props;
	return list.map((tag) => {
		return (
			<Fragment key={tag.label}>
				<Tag label={tag.label} color={tag.color} />{' '}
			</Fragment>
		);
	});
};

export default Tags;
