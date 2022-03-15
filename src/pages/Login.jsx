import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {CsButton, CsInput, CsSepreator, CsTopBox, CsWrapper, CsSpan, CsContainer, CsButtomBox} from '../components/common/common';

const Login = () => {
	return (
		<CsContainer>
			<CsWrapper>
				<CsTopBox>
					<div>
						<FontAwesomeIcon icon={faInstagram} size={'3x'} />
					</div>
					<form>
						<CsInput type='text' placeholder='username' />
						<CsInput type='password' placeholder='password' />
						<CsButton type='submit' value='Log In' />
					</form>

					<CsSepreator>
						<div></div>
						<span>Or</span>
						<div></div>
					</CsSepreator>
					<div>
						<FontAwesomeIcon icon={faFacebookSquare} color={'#2c2c2c'} />
						<CsSpan>Log in with Facebook</CsSpan>
					</div>
				</CsTopBox>
				<CsButtomBox>
					<span>Don't Have an account?</span>
					<Link to={'/signup'}>Sign up</Link>
				</CsButtomBox>
			</CsWrapper>
		</CsContainer>
	);
};

export default Login;
