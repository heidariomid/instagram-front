import {useQuery} from '@apollo/client';
import React from 'react';
import {USERS_QUERY} from '../../graphql/queries';

const Suggest = () => {
	const {data} = useQuery(USERS_QUERY);
	const users = data?.users?.slice(0, 5).map((user) => {
		return <div key={user?.id}>{user.userName}</div>;
	});
	return (
		<>
			<h1>Suggested User To Follow</h1>
			{users}
		</>
	);
};

export default Suggest;
