import {gql} from '@apollo/client';

export const LOGIN_MUTATION = gql`
	mutation ($email: String!, $password: String!) {
		userLogin(email: $email, password: $password) {
			isLoginSuccess
			error
			message
			token
		}
	}
`;
export const SIGN_UP_MUTATION = gql`
	mutation ($firstName: String!, $lastName: String, $userName: String!, $email: String!, $password: String!) {
		createAccount(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password) {
			isSignUpSuccess
			user {
				id
				email
				avatar
			}
			message
			error
		}
	}
`;

export const LIKE_PHOTO = gql`
	mutation ($likePhotoId: Int!) {
		likePhoto(id: $likePhotoId) {
			isLikeSuccess
		}
	}
`;

export const CREATE_COMMENT = gql`
	mutation CreateComment($photoId: Int!, $payload: String!) {
		createComment(photoId: $photoId, payload: $payload) {
			isCommentSuccess
			id
			error
		}
	}
`;

export const DELETE_COMMENT = gql`
	mutation ($id: Int!) {
		deleteComment(id: $id) {
			isCommentDeleted
			error
		}
	}
`;

export const TOGGLE_FOLLOW_STATUS = gql`
	mutation ($userName: String!) {
		toggleFollowStatus(userName: $userName) {
			isToggleSuccess
			message
			error
		}
	}
`;
