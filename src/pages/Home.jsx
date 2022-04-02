import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import Comments from '../components/Comments/Comments';
import Photo from '../components/Photos/Photo';
import Suggest from '../components/suggest/Suggest';
import {SEE_FEED} from '../graphql/queries';
import {PageTitle} from '../utils/PageTitle';

const Home = () => {
	const {data} = useQuery(SEE_FEED);
	const [feeds, setShowFeed] = useState(null);
	useEffect(() => {
		if (data?.seeFeed === null) {
			setShowFeed('You Have No Feed');
		}

		setShowFeed(data);
	}, [data]);

	const photos = feeds?.seeFeed?.map((data) => {
		return <Photo {...data} key={data.id} />;
	});
	return (
		<>
			<PageTitle title={'Instagram | Home'} />

			{photos?.length > 0 ? photos : <Suggest />}
			{feeds?.length > 0 && <Comments />}
		</>
	);
};

export default Home;
