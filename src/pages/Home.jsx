import {isLoginVar} from '../apollo';

const Home = () => {
	return (
		<div>
			Home
			<button onClick={() => isLoginVar(false)}>log out</button>
		</div>
	);
};

export default Home;
