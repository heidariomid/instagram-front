import {gql, useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {CREATE_COMMENT} from '../../graphql/mutations';
import useUser from '../../hooks/useUser';

const CommentForm = ({photo}) => {
	const {register, getValues, handleSubmit, setValue} = useForm();

	const {data} = useUser();

	const updateComment = (cache, result) => {
		const {payload} = getValues();
		setValue('payload', '');
		const {isCommentSuccess, id} = result?.data?.createComment;
		const newComment = {
			__typename: 'Comment',
			id,
			payload,
			isMine: true,
			createdAt: Date.now() + '',
			user: {
				...data?.userInfo,
			},
		};
		if (isCommentSuccess) {
			const newCommentCache = cache.writeFragment({
				fragment: gql`
					fragment BSName on Comment {
						id
						payload
						isMine
						createdAt
						user {
							userName
							avatar
						}
					}
				`,
				data: newComment,
			});

			cache.modify({
				id: `Photo:${photo?.id}`,
				fields: {
					comments(prevComments) {
						return [...prevComments, newCommentCache];
					},
					commentsNumber(prev) {
						return prev + 1;
					},
				},
			});
		}
	};
	const {payload} = getValues();
	const [createCommentHandler, {loading}] = useMutation(CREATE_COMMENT, {variables: {photoId: photo?.id, payload}, update: updateComment});
	const onValidSubmit = (data) => {
		if (loading) return;

		createCommentHandler({
			variables: {
				photoId: photo?.id,
				payload: data?.payload,
			},
		});
	};
	const payloadRegister = {required: {value: true, message: '* comment could not be empty'}};
	return (
		<form onSubmit={handleSubmit(onValidSubmit)}>
			<input type='text' {...register('payload', payloadRegister)} placeholder='Write a comment...' />
		</form>
	);
};

export default CommentForm;
