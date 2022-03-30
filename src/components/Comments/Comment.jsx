import {useMutation} from '@apollo/client';
import {DELETE_COMMENT} from '../../graphql/mutations';
import {CsCommentCaption, CsCommentsWrapper} from '../../styles/Comment';
import {CsBold} from '../../styles/common';

const Comment = ({comment, photo}) => {
	const updateDeleteComment = (cache, result) => {
		const {isCommentDeleted} = result?.data?.deleteComment;
		if (isCommentDeleted) {
			cache.evict({id: `Comment:${comment?.id}`});
			cache.modify({
				id: `Photo:${photo?.id}`,
				fields: {
					commentsNumber(prev) {
						return prev - 1;
					},
				},
			});
		}
	};
	const [deleteCommentHandler] = useMutation(DELETE_COMMENT, {variables: {id: comment?.id}, update: updateDeleteComment});

	return (
		<>
			<CsCommentsWrapper>
				<CsBold>{comment?.user?.userName}</CsBold>
				<CsCommentCaption>{comment?.payload}</CsCommentCaption>
				{comment?.isMine && <button onClick={() => deleteCommentHandler()}>X</button>}
			</CsCommentsWrapper>
		</>
	);
};

export default Comment;
