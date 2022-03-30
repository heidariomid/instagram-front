import {gql, useMutation} from '@apollo/client';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {isLoginVar} from '../apollo';
import {CsButton, CsSpan, CsInput, CsSepreator, CsTopBox, CsWrapper, CsContainer, CsButtomBox, CsSpanF, CsErrors} from '../styles/common';
import {LOGIN_MUTATION} from '../graphql/mutations';
import {PageTitle} from '../utils/PageTitle';

const Login = () => {
	const {state} = useLocation();
	const history = useHistory();

	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			email: state?.email || '',
			password: state?.password || '',
		},
	});

	const onCompleted = (data) => {
		const {isLoginSuccess, error, token} = data.userLogin;
		if (!isLoginSuccess) {
			setError('loginAuth', {message: error});
		}
		if (token) {
			localStorage.setItem('token', token);
			isLoginVar(true);
			history.push('/');
		}
	};
	const [loginHandler, {loading}] = useMutation(LOGIN_MUTATION, {onCompleted});

	const onValidSubmit = (data) => {
		if (loading) return;
		const {email, password} = getValues();
		loginHandler({
			variables: {
				email,
				password,
			},
		});
	};
	const onInValidSubmit = (data) => {
		console.log(data);
	};
	const emailRegister = {required: {value: true, message: '* email is required'}, minLength: {value: 5, message: '* email must be more than 5 charachter'}, validate: (current) => current.includes('@')};
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
					{state?.message !== undefined ? <CsSpan color='green'>{state?.message}</CsSpan> : null}
					{state?.error !== undefined ? <CsSpan color='red'>{state?.error}</CsSpan> : null}
					<form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
						<CsErrors>
							{errors.email?.type === 'validate' && <CsSpanF color={'red'} text='* email must include @' />}
							{errors?.email?.message && <CsSpanF color={'red'} text={errors?.email?.message} />}
						</CsErrors>
						<CsErrors>{errors?.password?.message && <CsSpanF color={'red'} text={errors?.password?.message} />}</CsErrors>
						<CsErrors>{errors?.loginAuth?.message && <CsSpanF color={'red'} text={errors?.loginAuth?.message} />}</CsErrors>
						<CsInput {...register('email', emailRegister)} type='text' placeholder='email' hasError={Boolean(errors?.email?.message)} onKeyDown={clearLoginErrors} />

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
