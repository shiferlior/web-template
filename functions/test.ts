
import { GraphQLClient } from 'graphql-request';
import { getSdk, GetPmQuery } from './generated/graphql';

console.log(111);

async function main() {
    const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));
    let pm: GetPmQuery = await sdk.getPm();

    console.log(`GraphQL data:`, pm);
}

main();




