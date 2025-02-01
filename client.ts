import { ApolloClient, InMemoryCache } from '@apollo/client';
//Apollo client
export const client = new ApolloClient({
    uri: process.env.WP_GRAPHQL_URL,
	cache: new InMemoryCache()
});