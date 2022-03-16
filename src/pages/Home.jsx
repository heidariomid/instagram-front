import {isLoginVar} from '../apollo';
import {PageTitle} from '../utils/PageTitle';

const Home = () => {
	return (
		<div>
			<PageTitle title={'Instagram | Home'} />
			Home
			<button onClick={() => isLoginVar(false)}>log out</button>
		</div>
	);
};

export default Home;
