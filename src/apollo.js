import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

export const isLoginVar = makeVar(Boolean(localStorage.getItem('token')));
export const isDarkVar = makeVar(true);
export const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});
