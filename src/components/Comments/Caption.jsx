import React from 'react';
import {Link} from 'react-router-dom';
import {CsCommentCaption, CsCommentCount, CsCommentsWrapper} from '../../styles/Comment';
import {CsBold} from '../../styles/common';

const Caption = ({photo}) => {
	const caption = photo?.caption?.split(' ')?.map((word, i) =>
		/#[\w]+/.test(word) ? (
			<React.Fragment key={i}>
				<Link key={i} to={`/hashtags/${word}`}>
					{word}
				</Link>{' '}
			</React.Fragment>
		) : (
			<React.Fragment key={i}>{word} </React.Fragment>
		),
	);

	return (
		<>
			<CsCommentsWrapper>
				<Link to={`/user/${photo?.user?.userName}`}>
					<CsBold>{photo?.user?.userName}</CsBold>
				</Link>
				<CsCommentCaption>{caption}</CsCommentCaption>
			</CsCommentsWrapper>
			<CsCommentCount>{photo?.commentsNumber === 1 ? '1 comment' : photo?.commentsNumber + ' comments'}</CsCommentCount>
		</>
	);
};

export default Caption;
