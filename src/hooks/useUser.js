import {useQuery, useReactiveVar} from '@apollo/client';
import {useEffect} from 'react';
import {isLoginVar, userLoggedOut} from '../apollo';
import {USER_QUERY} from '../graphql/queries';

const useUser = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);
	const {data, error} = useQuery(USER_QUERY, {skip: !isLoggedIn});
	useEffect(() => {
		if (data?.userInfo === null) {
			userLoggedOut();
		}
	}, [data]);

	return {data, error};
};

export default useUser;
