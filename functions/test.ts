
import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql';

console.log(111);

async function main() {
    const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));
    let pm = await sdk.getProjectManagers();

    console.log(`GraphQL data:`, pm.project_managers[0].id);
}

main();




