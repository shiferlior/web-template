import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
//import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { getSdk } from '../../generated/backend/graphql';
import { GraphQLClient } from 'graphql-request';

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));
  const pm = await sdk.getProjectManagers();

  const items: User[] = pm.project_managers;//sampleUserData
  return { props: { items } }
}

export default WithStaticProps
