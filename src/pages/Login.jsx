import {gql, useMutation} from '@apollo/client';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {client, isLoginVar} from '../apollo';
import {CsButton, CsInput, CsSepreator, CsTopBox, CsWrapper, CsSpan, CsContainer, CsButtomBox, CsSpanF, CsErrors} from '../components/common/common';
import Loader from '../components/Loader/Loader';
import {PageTitle} from '../utils/PageTitle';

const Login = () => {
	const {
		register,
		watch,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm({mode: 'onChange'});

	const LOGIN_MUTATION = gql`
		mutation ($email: String!, $password: String!) {
			userLogin(email: $email, password: $password) {
				isLoginSuccess
				error
				message
				token
			}
		}
	`;
	const onCompleted = (data) => {
		const {isLoginSuccess, error, message, token} = data.userLogin;
		if (!isLoginSuccess) {
			setError('loginAuth', {message: error});
		}
		if (token) {
			localStorage.setItem('token', token);

			isLoginVar(true);
		}
	};
	const [loginHandler, {loading}] = useMutation(LOGIN_MUTATION, {onCompleted});

	const onValidSubmit = (data) => {
		if (loading) return;
		const {username, password} = getValues();
		loginHandler({
			variables: {
				email: username,
				password,
			},
		});
	};
	const onInValidSubmit = (data) => {
		console.log(data);
	};
	const userNameRegister = {required: {value: true, message: '* username is required'}, minLength: {value: 5, message: '* username must be more than 5 charachter'}, validate: (current) => current.includes('@')};
	const passwordRegister = {required: {value: true, message: '* password could not be empty'}, minLength: {value: 4, message: '* password should be greater than 4'}};
	const clearLoginErrors = () => clearErrors('loginAuth');
	return (
		<CsContainer>
			<CsWrapper>
				<PageTitle title={'Instagram | Login'} />
				<CsTopBox>
					<div>
						<FontAwesomeIcon icon={faInstagram} size={'3x'} />
					</div>

					<form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
						<CsErrors>
							{errors.username?.type === 'validate' && <CsSpanF color={'red'} text='* email must include @' />}
							{errors?.username?.message && <CsSpanF color={'red'} text={errors?.username?.message} />}
						</CsErrors>
						<CsErrors>{errors?.password?.message && <CsSpanF color={'red'} text={errors?.password?.message} />}</CsErrors>
						<CsErrors>{errors?.loginAuth?.message && <CsSpanF color={'red'} text={errors?.loginAuth?.message} />}</CsErrors>
						<CsInput {...register('username', userNameRegister)} type='text' placeholder='username' hasError={Boolean(errors?.username?.message)} onKeyDown={clearLoginErrors} />

						<CsInput {...register('password', passwordRegister)} type='password' placeholder='password' hasError={Boolean(errors?.password?.message)} onKeyDown={clearLoginErrors} />

						<CsButton type='submit' value={loading ? 'Loading...' : 'Log In'} disabled={!isValid || loading} />
					</form>

					<CsSepreator>
						<div></div>
						<span>Or</span>
						<div></div>
					</CsSepreator>
					<div>
						<FontAwesomeIcon icon={faFacebookSquare} color={'#2c2c2c'} />
						<CsSpanF text={'Log in with FaceBook'} />
					</div>
				</CsTopBox>
				<CsButtomBox>
					<CsSpanF text={"Don't Have an account?"} />
					<Link to={'/signup'}>Sign up</Link>
				</CsButtomBox>
			</CsWrapper>
		</CsContainer>
	);
};

export default Login;
