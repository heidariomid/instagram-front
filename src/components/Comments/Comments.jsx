import {CsCommentCount, CsCommentsContainer} from '../../styles/Comment';
import Caption from './Caption';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = (photo) => {
	const comment = photo?.comments?.map((comment) => <Comment photo={photo} comment={comment} key={comment?.id} />);
	return (
		<CsCommentsContainer>
			<Caption photo={photo} />

			{comment}
			<CommentForm photo={photo} />
		</CsCommentsContainer>
	);
};

export default Comments;
