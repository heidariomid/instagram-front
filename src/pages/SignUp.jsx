import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {CsButton, CsErrors, CsInput, CsTopBox, CsWrapper, CsSpan, CsContainer, CsButtomBox, CsSpanF} from '../styles/common';
import {PageTitle} from '../utils/PageTitle';
import {useMutation} from '@apollo/client';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {SIGN_UP_MUTATION} from '../graphql/mutations';

const SignUp = () => {
	const history = useHistory();
	const {
		register,
		getValues,
		formState: {errors, isValid},
		handleSubmit,
		setError,
		clearErrors,
	} = useForm({mode: 'onChange'});

	const onCompleted = (data) => {
		const {isSignUpSuccess, error, user} = data.createAccount;
		if (!isSignUpSuccess) {
			setError('signUpAuth', {message: error});
		}
		if (user) {
			const {email, password} = getValues();
			history.push('/login', {message: 'Your Account Created Successfully , Please Log In!', email, password});
		}
	};
	const [signUpHandler, {loading}] = useMutation(SIGN_UP_MUTATION, {onCompleted});

	const onValidSubmit = (data) => {
		if (loading) return;
		const {username, password, firstName, lastName, email} = data;
		signUpHandler({
			variables: {
				firstName,
				lastName,
				email,
				userName: username,
				password,
			},
		})
			.then((response) => response)
			.catch((err) => {
				console.log(err.message);
			});
	};
	const onInValidSubmit = (data) => {
		console.log(data);
	};
	const userNameRegister = {required: {value: true, message: '* username is required'}, minLength: {value: 5, message: '* username must be more than 5 charachter'}};
	const passwordRegister = {required: {value: true, message: '* password could not be empty'}, minLength: {value: 4, message: '* password should be greater than 4'}};
	const firstNameRegister = {required: {value: true, message: '* firstName could not be empty'}};
	const lastNameRegister = {required: {value: true, message: '* lastName could not be empty'}};
	const emailRegister = {required: {value: true, message: '* email could not be empty'}, validate: (current) => current.includes('@')};

	const clearLoginErrors = () => clearErrors('signUpAuth');
	return (
		<CsContainer>
			<CsWrapper>
				<PageTitle title={'Instagram | Sign Up '} />
				<CsTopBox>
					<div>
						<FontAwesomeIcon icon={faInstagram} size={'3x'} />
					</div>
					<form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
						{/* errors */}
						<CsErrors>
							{errors.email?.type === 'validate' && <CsSpanF color={'red'} text='* email must include @' />}
							{errors?.email?.message && <CsSpanF color={'red'} text={errors?.email?.message} />}
						</CsErrors>
						<CsErrors>{errors?.firstName?.message && <CsSpanF color={'red'} text={errors?.firstName?.message} />}</CsErrors>
						<CsErrors>{errors?.lastName?.message && <CsSpanF color={'red'} text={errors?.lastName?.message} />}</CsErrors>
						<CsErrors>{errors?.username?.message && <CsSpanF color={'red'} text={errors?.username?.message} />}</CsErrors>
						<CsErrors>{errors?.password?.message && <CsSpanF color={'red'} text={errors?.password?.message} />}</CsErrors>
						<CsErrors>{errors?.signUpAuth?.message && <CsSpanF color={'red'} text={errors?.signUpAuth?.message} />}</CsErrors>
						{/* inputs */}

						<CsInput {...register('firstName', firstNameRegister)} type='text' placeholder='firstName' hasError={Boolean(errors?.firstName?.message)} onKeyDown={clearLoginErrors} />

						<CsInput {...register('lastName', lastNameRegister)} type='text' placeholder='lastName' hasError={Boolean(errors?.lastName?.message)} onKeyDown={clearLoginErrors} />

						<CsInput {...register('email', emailRegister)} type='text' placeholder='email' hasError={Boolean(errors?.email?.message)} onKeyDown={clearLoginErrors} />

						<CsInput {...register('username', userNameRegister)} type='text' placeholder='username' hasError={Boolean(errors?.username?.message)} onKeyDown={clearLoginErrors} />

						<CsInput {...register('password', passwordRegister)} type='password' placeholder='password' hasError={Boolean(errors?.password?.message)} onKeyDown={clearLoginErrors} />

						{/* button */}
						<CsButton type='submit' value={loading ? 'Loading...' : 'Sign Up'} disabled={!isValid || loading} />
					</form>
					<CsSpan>By siging up,you agree to our Terms,Data Policy and Cookies Policy .</CsSpan>
				</CsTopBox>
				<CsButtomBox>
					<span>Have an account?</span>
					<Link to={'/login'}>Log In</Link>
				</CsButtomBox>
			</CsWrapper>
		</CsContainer>
	);
};

export default SignUp;
